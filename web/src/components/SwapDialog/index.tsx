import React, { FormEvent, useEffect, useState } from 'react';
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

import { useWallet } from '../../hooks/useWallet';
import { useMetamaskWallet } from '../../hooks/useMetamaskWallet';
import { useRecoilState } from 'recoil';
import { keplrState } from '../../recoil/atoms';

import { Text, Title } from '../../components/Text';
import { IconLogoAkash } from '../Icons';
import axios from 'axios';
import { upperCase } from 'lodash';

const baseUrl = 'https://storage.swapspace.co';

const validationSchema = yup.object({
  amount: yup
    .number()
    .required('Amount is required').test((val) => val! > 0),
});

const countries = [
  { value: 'MG', label: 'ETH', icon: 'https://storage.swapspace.co/static/font/src/eth.svg' },
  { value: 'UE', label: 'BTC', icon: 'https://storage.swapspace.co/static/font/src/btc.svg' }
];

interface Currency {
  code: string
  contractAddress: string
  deposit: boolean
  extraIdName: string
  hasExtraId: boolean
  icon: string
  id: string
  name: string
  network: string
  popular: boolean
  validationRegexp: string
  withdrawal: boolean
}

interface DialogProps extends MuiDialogProps {
  open: boolean;
  close: () => void;
}


export const SwapDialog = (props: DialogProps) => {
  const { open, close } = props;
  const [keplr, setKeplr] = useRecoilState(keplrState);
  //const wallet = useWallet();
  const metamaskWallet = useMetamaskWallet();
  //const [crypto, setCrypto] = React.useState<any>({});
  const [currencies, setCurrencies] = React.useState<Currency[]>([]);
  const [bestAmount, setBestAmount] = React.useState<any>({});

  let key = 0;

  const handleOnChange = (event: FormEvent) => {
    if(formik.values.amount && formik.values.crypto){
      getBestAmount();
    }
  };

  const handleClose = (event: any, reason: any) => {
    if (reason && reason == 'backdropClick')
      return;
  }


  const formik = useFormik({
    initialValues: {
      amount: 1,
      crypto : {
        name: "Ethereum",
        icon: "/static/font/src/eth.svg",
        deposit: true,
        withdrawal: true,
        validationRegexp: "/^(0x)[0-9A-Fa-f]{40}$/",
        code: "eth",
        network: "eth",
        hasExtraId: false,
        id: "qfXXh1jpc2",
        extraIdName: "",
        contractAddress: "",
        popular: true
    }
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log("Values: ",values);
      getBestAmount();
      //getEstimatedAmount();
    },
  
  });
  const getEstimatedAmount = async () => {
    await axios({
      method: 'get',
      url: 'https://api.swapspace.co/api/v2/amounts',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_SWAPSPACE_API_KEY!
      },
      params:{
        fromCurrency: formik.values.crypto.code,
        fromNetwork: formik.values.crypto.network,
        toNetwork: 'akt',
        toCurrency: 'akt',
        amount: formik.values.amount,
      }
    }).then(async(response) => {
      console.log("Estimation", response);
      if(response.status == 200){
        //const bestAmount = await (response.data).filter((offer: any)=>{ offer});
      }
        
        //setBestAmount(response.data.toAmount);
    });
  }

  const getBestAmount = async () => {
    await axios({
      method: 'get',
      url: 'https://api.swapspace.co/api/v2/amounts/best',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_SWAPSPACE_API_KEY!
      },
      params:{
        fromCurrency: formik.values.crypto.code,
        fromNetwork: formik.values.crypto.network,
        toNetwork: 'akt',
        toCurrency: 'akt',
        amount: formik.values.amount,
      }
    }).then((response) => {
      console.log("Estimation", response);
      if(response.status == 200){
        console.log("Best Estimation", response.data);
        setBestAmount(response.data);
      }
    });
  }

  const createExchange = async () => {
    await axios({
      method: 'post',
      url: 'https://api.swapspace.co/api/v2/exchange',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_SWAPSPACE_API_KEY!
      },
      params:{
        partner: bestAmount.partner,
        fromCurrency: formik.values.crypto.code,
        fromNetwork: formik.values.crypto.network,
        toNetwork: 'akt',
        toCurrency: 'akt',
        address: keplr.accounts[0].address,
        amount: formik.values.amount,
        fixed: false,
        extraId: "",
        rateId: "",
        userIp: "8.8.8.8",
        refund: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
      }
    }).then((response) => {
      
      if(response.status == 200){
        
      }
    });
  }
 
  useEffect(() => {
    const getCurrenciesList = async () => {
      await axios({
        method: 'get',
        url: 'https://api.swapspace.co/api/v2/currencies',
        headers: {
          'Accept': 'application/json',
          'Authorization': process.env.REACT_APP_SWAPSPACE_API_KEY!
        }
      }).then(async (response) => {
        console.log('Response',response.data);
        const currencyList = response.data;
        const popularCrypto = await currencyList.filter((currency: any) => currency.popular === true);
        console.log('Popular',popularCrypto);
        setCurrencies([...popularCrypto]);
      });
      console.log('List',currencies);
    }
    getCurrenciesList();
  }, []);

  return (
    <MuiDialog
      fullWidth={true}
      maxWidth='xs'
      onClose={handleClose}
      open={open}>
      <DialogTitle>Fund Account</DialogTitle>
      <IconButton
        aria-label='close'
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
      <form onSubmit={formik.handleSubmit} onChange={handleOnChange} >
        <DialogContent>
          <Typography variant='h4'>You Send</Typography>
          <Stack sx={{ backgroundColor: '#66666615', p: '10px' }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <FormControl fullWidth error={Boolean(formik.touched.amount && formik.errors.amount)}>
              <TextField
                fullWidth
                required
                name='amount'
                id='standard-number'
                label='amount'
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='standard'
                value={formik.values.amount}
                onChange={formik.handleChange}
              />
              {formik.touched.amount && formik.errors.amount && (
                <FormHelperText error id='standard-weight-helper-text--title'>
                  {formik.errors.amount}
                </FormHelperText>
              )}
            </FormControl>
            <Divider orientation='vertical' sx={{ color: 'black' }} />
            <FormControl sx={{ m: 1, minWidth: 150, width: 150 }} /*error={Boolean(formik.touched.crypto && formik.errors.crypto)}*/>
              <InputLabel id='demo-dialog-select-label'>Crypto</InputLabel>
              <Select
                onClick={handleOnChange}
                labelId='demo-dialog-select-label'
                id='demo-dialog-select'
                name='crypto'
                defaultValue={formik.initialValues.crypto}
                //value={countries[1]}
                value={formik.values.crypto}
                onChange={formik.handleChange}
                input={<OutlinedInput label='Crypto' />}
                renderValue={(selected: Currency) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Avatar src={baseUrl + selected.icon} sx={{ width: 24, height: 24 }} />
                    <Typography>{upperCase(selected.code)}</Typography>
                  </Box>
                )}
                MenuProps={{
                  sx:{
                    maxHeight: '500px'
                  }
                }}
              >
               {currencies && currencies.map((c: Currency) => (
                  <MenuItem value={c as any} key={key++}>
                    <ListItemIcon>
                      <Avatar src={baseUrl + c.icon} sx={{ width: 24, height: 24 }} />
                    </ListItemIcon>
                    {c.name}
                  </MenuItem>
                ))}

{/* {countries.map((c) => (
                  <MenuItem value={c as any} key={key++}>
                    <ListItemIcon>
                      <Avatar src={c.icon} sx={{ width: 24, height: 24 }} />
                    </ListItemIcon>
                    {c.label}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>

          </Stack>
          <Typography variant='h4' sx={{ mb: '20px', mt: '20px' }}>You get</Typography>
          <Stack sx={{ backgroundColor: '#66666615', p: '20px' }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant='h6'>{bestAmount.toAmount}</Typography>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignContent={'center'} >
              <Divider orientation='vertical' variant='fullWidth' flexItem sx={{ mr: '20px' }} />
              <IconLogoAkash />
              <Typography variant='h6' sx={{ ml: '10px' }}>AKT</Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' type='submit'>Create Exchange</Button>
        </DialogActions>
      </form>
    </MuiDialog>
  );
};

