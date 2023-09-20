import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Stack
} from '@mui/material';
import DotLoader from "react-spinners/DotLoader";
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useWallet } from "../../hooks/useWallet";
import { useMetamaskWallet } from "../../hooks/useMetamaskWallet";
import { useRecoilState } from 'recoil';
import { keplrState } from '../../recoil/atoms';

import { IconKeplr, IconMetamask } from "../Icons";
import React, { useEffect } from 'react';
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

export type CloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButtonClick';

export interface DialogProps extends MuiDialogProps {
  open: boolean;
  close: () => void;
  //onClose: (event: any, reason: any) => void;
}

export const WalletDialog = (props: DialogProps) => {
  const { open, close } = props;
  const wallet = useWallet();
  const [keplr, setKeplr] = useRecoilState(keplrState);
  const metamaskWallet = useMetamaskWallet();
  //const [openMenu, setOpenMenu] = React.useState(open);
  const [selectedWallet, setSelectedWallet] = React.useState("");

  const handleListItemClick = (value: string) => {
    setSelectedWallet(value);
    //setIsConnecting(true);
    setKeplr({
      accounts: [],
      isSignedIn: false,
      isConnecting: true
    })
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

  const handleBack = () =>{
    setKeplr({
      accounts: [],
      isSignedIn: false,
      isConnecting: false
    })
  }


  const handleClose = (event: any, reason: any) => {
    if (reason && reason == "backdropClick")
    return;
  }

  return (
    <MuiDialog
    
      fullWidth={true}
      maxWidth="xs"
      disableEscapeKeyDown={true}
      aria-labelledby="wallet-dialog-title"
      open={open}
      onClose={handleClose}
    >
         <DialogTitle id="wallet-dialog-title">
         {keplr.isConnecting ? 
       <IconButton
          aria-label="back"
          onClick={handleBack}
          size='small'
        >
          <NavigateBeforeIcon />
        </IconButton> : 
         <Typography variant='h5' sx={{fontWeight:'medium'}}>
           Choose your wallet
         </Typography>
        }
         </DialogTitle>
      <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      <DialogContent>
        {keplr.isConnecting ?   
         <Box>
          <Stack direction='row' spacing={20}>
          {getIcon(selectedWallet)}
            <DotLoader
            color='#FA5757'
            loading= {true}
            size={50}
            aria-label='Loading Spinner'
            />
          </Stack>
          <Typography variant='h6' sx={{mt:'20px', mb:'10px'}}>
            Connecting your wallet...
          </Typography>
    
         <Typography variant='subtitle1'>
         Connect your wallet through the {selectedWallet} pop-up
     </Typography>
         </Box>
      
        : 
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

        }
     
      </DialogContent>
    </MuiDialog>
  );
};
