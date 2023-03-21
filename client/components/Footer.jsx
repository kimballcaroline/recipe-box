import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../stylesheets/footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <h2>Coded by Caroline Kimball</h2>
      <div className='icons'>
        <IconButton
          href='https://www.linkedin.com/in/kimballcaroline/'
          target='_blank'
        >
          <LinkedInIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton href='https://github.com/kimballcaroline' target='_blank'>
          <GitHubIcon sx={{ color: 'black' }} />
        </IconButton>
      </div>
    </div>
  );
}
