import React from 'react';
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export type CloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButtonClick';

export interface DialogProps extends MuiDialogProps {
  title: string;
  children?: React.ReactNode;
  open: boolean;
  close: () => void;
}

export const WalletDialog = (props: DialogProps) => {
  const { title, open, close,children } = props;
  return (
    <MuiDialog
      fullWidth={true}
      maxWidth="xs"
      disableEscapeKeyDown={true}
      aria-labelledby="wallet-dialog-title"
      open={open}
    >
      <DialogTitle id="wallet-dialog-title">
        {title}
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
        {children}
      </DialogContent>
    </MuiDialog>
  );
};
