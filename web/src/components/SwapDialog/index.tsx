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
  FormHelperText,
  Link
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


import { useWallet } from '../../hooks/useWallet';
import { useMetamaskWallet } from '../../hooks/useMetamaskWallet';
import { useRecoilState } from 'recoil';
import { keplrState } from '../../recoil/atoms';

import { Text, Title } from '../../components/Text';
import { IconAkash, IconLogoAkash } from '../Icons';
import axios from 'axios';
import { upperCase } from 'lodash';
import { Timer } from '../Timer';

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
  const [timerExpired, setTimerExpired] = React.useState(false);
  const [currencies, setCurrencies] = React.useState<Currency[]>([]);
  const [bestAmount, setBestAmount] = React.useState<any>({});
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [exchange, setExchange] = React.useState<any>({
    "id": "78sZEDF457qa",
    "partner": "simpleswap",
    "fixed": false,
    "timestamps": {
      "createdAt": "2022-04-26T12:33:56",
      "expiresAt": "2022-04-27T12:33:56"
    },
    "from": {
      "code": "btc",
      "network": "btc",
      "amount": 0.11,
      "address": "1NjctHxABjtQ1mnED4zZjsn6hLVvocCZNa",
      "extraId": "",
      "transactionHash": ""
    },
    "to": {
      "code": "eth",
      "network": "eth",
      "amount": 1.47271794,
      "address": "0x32be343b94f860124dc4fee278fdcbd38c102d88",
      "extraId": "",
      "transactionHash": ""
    },
    "rate": 13.388344909090907,
    "status": "waiting",
    "confirmations": -1,
    "refundExtraId": "",
    "blockExplorerTransactionUrl": {
      "from": "",
      "to": ""
    },
    "blockExplorerAddressUrl": {
      "from": "",
      "to": "https://blockchair.com/ru/ethereum/address/0x32be343b94f860124dc4fee278fdcbd38c102d88"
    }
  });

  let key = 0;

  const handleTimerExpire = () => {
    setTimerExpired(true);
  };

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
    onSubmit: () => {
      createExchange();
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
        refund: keplr.parent?.address
      }
    }).then((response) => {
      console.log("Exchange", response);
      if(response.status == 200){
        setExchange(response.data)
        setIsProcessing(true);
        
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
          {!isProcessing ? 
          <Stack spacing={1}>
         
          <Stack direction='row' justifyContent='space-between' sx={{mb: '20px'}}>
            <Stack direction='row' spacing={1} >
              <Avatar sx={{width: 40, height:40}} src={baseUrl+ formik.values.crypto.icon}></Avatar>
              <Box>
                <Typography>You Send</Typography>
                <Typography>{exchange.from.amount+" "+upperCase(exchange.from.code)}</Typography>
              </Box>
            </Stack>
            <DoubleArrowIcon/>
            <Stack direction='row' spacing={1}>
             <IconAkash  width={40} height={40}/>
              <Box>
                <Typography>You Receive</Typography>
                <Typography>~ {exchange.to.amount} AKT</Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack direction='row' spacing={1} >
            <Typography variant='subtitle2'>Exchange rate:</Typography>
            <Typography>1 {upperCase(exchange.from.code)} =</Typography>
            <Typography>{exchange.rate+ " AKT"}</Typography>
          </Stack>
          <Stack direction='row' spacing={1} >
            <Typography variant='subtitle2'>Recipient:</Typography>
            <Typography>{keplr.isSignedIn ? keplr.accounts[0].address : ""}</Typography>
          </Stack>
          <Stack direction='row' spacing={1}>
            <Typography variant='subtitle2'>Exchange ID:</Typography>
            <Typography>{exchange.id}</Typography>
          </Stack>
          <Stack direction='row' spacing={1}>
            <Typography variant='subtitle2'>Exchange Partner:</Typography>
            <Typography>{exchange.partner}</Typography>
          </Stack>
          <Stack direction='row' spacing={1}>
            <Typography variant='subtitle2'>Type</Typography>
            <Typography>{exchange.fixed ? 'fixed' : '~ Floating'}</Typography>
          </Stack>
          <Typography variant='body2'>
          Always keep the exchange ID till the end of the exchange process. If you have any issues, contact:&nbsp;
          { <Link href="mailto:support@swapspace.co" underline="none">
            {'support@swapspace.co'}
            </Link>
          } 
          </Typography>
          </Stack>
          : 
          <>
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
          </>
        }
        </DialogContent>
        <DialogActions>
          {!isProcessing ? 
            <Stack direction='row' spacing={4} alignItems='center' justifyContent='center'>
            {/* <Typography variant='subtitle2'>Deposite time: 00:00</Typography> */}
            <Timer startTime={Date.now()} onTimerEnd={handleTimerExpire} message='Deposit' eta={60*60*1000}/>
            <Button variant='contained'>Send</Button>
          </Stack> 
          :
          <Button variant='contained' type='submit'>Create Exchange</Button>
          }
          
        </DialogActions>
      </form>
    </MuiDialog>
  );
};

