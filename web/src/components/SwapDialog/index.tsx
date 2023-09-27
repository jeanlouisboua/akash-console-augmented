import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Stack,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  ListItemIcon,
  Avatar,
  TextField,
  DialogActions,
  Button,
  FormHelperText
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { useWallet } from "../../hooks/useWallet";
import { useMetamaskWallet } from "../../hooks/useMetamaskWallet";
import { useRecoilState } from 'recoil';
import { keplrState } from '../../recoil/atoms';

import { Text, Title } from '../../components/Text';
import { IconLogoAkash } from "../Icons";

const validationSchema = yup.object({
  amount: yup
    .number()
    .required('Amount is required').test((val) => val! > 0),
});

const countries = [
  { value: "MG", label: "ETH", icon: "https://storage.swapspace.co/static/font/src/eth.svg" },
  { value: "UE", label: "BTC", icon: "https://storage.swapspace.co/static/font/src/btc.svg" }
];



export interface DialogProps extends MuiDialogProps {
  open: boolean;
  close: () => void;
}


export const SwapDialog = (props: DialogProps) => {
  const { open, close } = props;
  const [keplr, setKeplr] = useRecoilState(keplrState);
  const [data, setData] = useState({});
  //const wallet = useWallet();
  const metamaskWallet = useMetamaskWallet();
  const [crypto, setCrypto] = React.useState<any>({ value: "MG", label: "ETH", icon: "https://storage.swapspace.co/static/font/src/eth.svg" });
  
  const handleChange = (event: SelectChangeEvent<typeof crypto>) => {
    setCrypto(event.target.value);
    console.log(crypto);
  };

  const handleClose = (event: any, reason: any) => {
    if (reason && reason == "backdropClick")
      return;
  }


  const formik = useFormik({
    initialValues: {
      amount: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <MuiDialog
      fullWidth={true}
      maxWidth="xs"
      onClose={handleClose}
      open={open}>
      <DialogTitle>Fund Account</DialogTitle>
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
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Typography variant='h4'>You Send</Typography>
          <Stack sx={{ backgroundColor: "#66666615", p: '10px' }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <FormControl fullWidth error={Boolean(formik.touched.amount && formik.errors.amount)}>
              <TextField
                fullWidth
                required
                name='amount'
                id="standard-number"
                label="amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                value={formik.values.amount}
                onChange={formik.handleChange}
              />
              {formik.touched.amount && formik.errors.amount && (
                <FormHelperText error id="standard-weight-helper-text--title">
                  {formik.errors.amount}
                </FormHelperText>
              )}
            </FormControl>
            <Divider orientation="vertical" sx={{ color: 'black' }} />
            <FormControl sx={{ m: 1, minWidth: 150, width: 150 }}>
              <InputLabel id="demo-dialog-select-label">Crypto</InputLabel>
              <Select

                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                defaultValue={crypto}
                value={crypto}
                onChange={handleChange}
                input={<OutlinedInput label="Crypto" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    <Avatar src={selected.icon} sx={{ width: 24, height: 24 }} />
                    <Typography>{selected.label}</Typography>
                  </Box>
                )}

              >
                {countries.map((c) => (
                  <MenuItem value={c as any}>
                    <ListItemIcon>
                      <Avatar src={c.icon} sx={{ width: 24, height: 24 }} />
                    </ListItemIcon>
                    {c.label}
                  </MenuItem>
                ))}

              </Select>
            </FormControl>

          </Stack>
          <Typography variant='h4' sx={{ mb: '20px', mt: '20px' }}>You get</Typography>
          <Stack sx={{ backgroundColor: "#66666615", p: '20px' }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant='h6'>{'4582'}</Typography>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignContent={'center'} >
              <Divider orientation="vertical" variant="fullWidth" flexItem sx={{ mr: '20px' }} />
              <IconLogoAkash />
              <Typography variant='h6' sx={{ ml: '10px' }}>AKT</Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' type='submit'>View Offers</Button>
        </DialogActions>
      </form>
    </MuiDialog>
  );
};

