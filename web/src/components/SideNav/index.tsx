import React, { Suspense, useCallback, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { startCase, toLower } from 'lodash';
import { CSSObject, styled as MuiStyled, Theme } from '@mui/material/styles';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { appVersion } from '../../recoil/atoms';
import { Icon } from '../Icons';
import { Avatar, Button, Chip, Typography } from '@mui/material';
import { useWallet } from '../../hooks/useWallet';
import { useMetamaskWallet } from '../../hooks/useMetamaskWallet';
import { HelpCenterSideHelp } from '../../components/HelpCenter/HelpCenterSideHelp';
import { showKeplrWindow, keplrState } from '../../recoil/atoms';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Loading from '../Loading';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { WalletDialog } from '../WalletDialog';
import { IconMetamask, IconKeplr, IconLogoAkash } from '../Icons';
import { shortenString } from '../../_helpers/addresses';
import Blockies from 'react-18-blockies';
import { getAccountBalance } from '../../recoil/api/bank';
import { uaktToAKT } from '../../_helpers/lease-calculations';


const wallets = ['Keplr', 'Metamask'];

const getIcon = (wallet: String) => {
  switch (wallet) {
    case 'Keplr':
      return <IconKeplr />;
    case 'Metamask':
      return <IconMetamask />;
    default:
      return null
  }
};

export default function SideNav(props: any) {
  const { children } = props;
  const version = useRecoilValue(appVersion);
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const wallet = useWallet();
  const metamaskWallet = useMetamaskWallet();
  const [isHelpCenterOpen, setIsHelpCenterOpen] = useState(false);
  const [, setShowKeplrPopup] = useRecoilState(showKeplrWindow);

  const [openMenu, setOpenMenu] = React.useState(false);
  const [keplr, setKeplr] = useRecoilState(keplrState);
  const [balance, setBalance] = React.useState(0);


  React.useEffect(() => {
    if (!window.keplr) return;
    if (keplr.isSignedIn && keplr?.accounts[0]?.address) {
      const account = keplr.accounts[0].address;
      getAccountBalance(account).then((result) => {
        const akt = uaktToAKT(result);
        setBalance(akt);
      });
    }
  }, [keplr]);


  const handleListItemClick = (value: string) => {
    switch (value) {
      case 'Keplr':
        wallet.connect();
        break;
      case 'Metamask':
        metamaskWallet.connect();
        break;
      default:
        break;
    }

  };

  const handleDisconnectWallet = () => {
    localStorage.setItem('walletConnected', 'false');
    setKeplr({
      isSignedIn: false,
      accounts: [],
    });
    handleClose();
  };

  const handleClick = () => {
     setOpenMenu(true);
   // wallet.connect();
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const toggleHelpCenter = useCallback(() => {
    setIsHelpCenterOpen((prevIsOpen: boolean) => !prevIsOpen);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handlePathnames = () => {
    return pathnames.map((value, i) => {
      const path = `/${pathnames.slice(0, i + 1).join('/')}`;
      return {
        name: startCase(toLower(value)),
        path,
      };
    });
  };

  /*const handleConnectWallet = () => {
    wallet.connect();
  };

  const handleDisconnectWallet = () => {
    wallet.disconnect();
  };*/

  const handleShowKeplrHelp = () => {
    setShowKeplrPopup(true);
  };

  return (
    <Stack>
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            id="icon_button_open_side_nav"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <Icon type="logoAkash" />
          </IconButton>
          <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            {handlePathnames().map((obj: any, i: number) => (
              <Link to={obj.path} key={i}>
                {obj.name}
              </Link>
            ))}
          </Breadcrumbs>
          <div className="grow">{/* flex grow spacer */}</div>
          {wallet.isConnected ? (
            <>
              <Stack direction='row' justifyContent='center' spacing={1} sx={{ mr: '20px' }}>
                <Avatar>
                  <Blockies
                    seed={keplr?.accounts[0]?.address}
                    size={10}
                    scale={4}

                    className="identicon"
                  />
                </Avatar>
                <Box >
                  <Typography variant='h4' sx={{ mb: 0 }}>{shortenString(keplr?.accounts[0]?.address || '')}</Typography>
                  <Chip
                    sx={{ pl: '5px', fontSize: '12px' }}
                    size='small'
                    avatar={<Avatar sx={{ backgroundColor: 'transparent' }}> <IconLogoAkash /> </Avatar>}
                    label={balance + " AKT"}
                    variant="outlined"
                  />

                </Box>
              </Stack>
              <Button variant="outlined" onClick={handleDisconnectWallet}>
                <Box marginRight="0.5rem">
                  <Icon type="wallet" />
                </Box>
                Disconnect Wallet
              </Button>
              <StyledHelpIcon onClick={handleShowKeplrHelp} />
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={handleClick}>
                <Box marginRight="0.5rem">
                  <Icon type="wallet" />
                </Box>
                Connect Wallet
              </Button>
              <WalletDialog
                close={handleClose}
                open={openMenu}
                title='Choose your wallet'
              >
                <List sx={{ pt: 0 }}>
                  {wallets.map((wallet) => (
                    <ListItem disableGutters key={wallet} >
                      <ListItemButton onClick={() => handleListItemClick(wallet)} >
                        <ListItemAvatar>
                          {getIcon(wallet)}
                        </ListItemAvatar>
                        <ListItemText primary={wallet} sx={{ ml: '20px' }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </WalletDialog>

              <StyledHelpIcon onClick={handleShowKeplrHelp} />
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} id="drawer_side_nav">
        <DrawerHeader>
          <div className="flex items-center w-full">
            <span className="mr-3">
              <Icon type="logoAkashConsole" />
            </span>
            <div className="grow"></div>
            <div id="button_close_side_nav" onClick={handleDrawerClose}>
              <Icon type="close" />
            </div>
          </div>
        </DrawerHeader>
        <Divider />
        <Suspense fallback={<div className="pl-4">...</div>}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0}
            height="100%"
            paddingX="10px"
            paddingY="10px"
          >
            <Link to="landing" id="link_new_deployment">
              <SideNavMenuItemRed>
                <AddIcon style={{ color: '#F43F5E' }} />
                <SideNavMenuItemLabel style={{ color: '#F43F5E' }}>
                  New Deployment
                </SideNavMenuItemLabel>
              </SideNavMenuItemRed>
            </Link>
            <NavLink
              to="my-deployments"
              id="link_my_deployments"
              className={({ isActive }) => (isActive ? 'selected-active' : 'selected-inactive')}
            >
              <SideNavMenuItem>
                <IconWrapper>
                  <Icon type="deployments" />
                </IconWrapper>
                <SideNavMenuItemLabel>My Deployments</SideNavMenuItemLabel>
              </SideNavMenuItem>
            </NavLink>
            <div className="grow">
              <button onClick={handleToggleDrawer} style={{ width: 260, height: '100%' }}></button>
            </div>
            <NavLink
              to="settings"
              id="link_settings"
              className={({ isActive }) => (isActive ? 'selected-active' : 'selected-inactive')}
            >
              <SideNavMenuItem>
                <IconWrapper>
                  <Icon type="settings" />
                </IconWrapper>
                <SideNavMenuItemLabel>Settings</SideNavMenuItemLabel>
              </SideNavMenuItem>
            </NavLink>

            <SideNavMenuItem id='link_help'>
              <IconWrapper onClick={toggleHelpCenter}>
                <Icon type="help" />
              </IconWrapper>
              <SideNavMenuItemLabel>Help</SideNavMenuItemLabel>
            </SideNavMenuItem>

            <Typography
              variant="caption"
              component="p"
              color="red"
              marginTop="0.5rem"
            >
              {`v${version}`}
            </Typography>
          </Stack>
        </Suspense>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </Box>
      <HelpCenterSideHelp isOpen={isHelpCenterOpen} onClose={toggleHelpCenter} />
    </Stack>
  );
}

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = MuiStyled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  paddingLeft: 24,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = MuiStyled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: '#FFFFFF',
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = MuiStyled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
  '& .MuiDrawer-paper:first-of-type': {
    boxShadow: '0px 0px 24px rgba(58, 60, 77, 0.24)',
  },
}));

const IconWrapper = styled.div`
  width: 24px;
  float: left;
`;

const SideNavMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  padding: 12px 12px 12px 10px;
  height: 40px;
  cursor: pointer;
  border: 1px solid transparent;
`;

const SideNavMenuItemRed = styled(SideNavMenuItem)`
  padding-left: 8px;
  border-radius: 8px;
  border: 1px solid #ffffff;

  &:hover {
    border: 1px solid #fa5757;
    background: #fff1f2;
  }
`;

const SideNavMenuItemLabel = styled.span`
  margin-left: 24px;
  font-family: 'Satoshi-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #4b5563;
`;

const StyledHelpIcon = styled(HelpOutlineIcon)`
  cursor: pointer;
  font-size: 18px;
  color: #717171;
  margin-left: 10px;
`;
