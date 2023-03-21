import React from 'react';
import { IconButton } from '@mui/material';

export default function IconButtonCustom({ link, icon }) {
  return (
    <IconButton href={link} target='_blank' variant='icon-button'>
      {icon}
    </IconButton>
  );
}
