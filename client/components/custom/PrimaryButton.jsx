import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function PrimaryButton({ content, to }) {
  return (
    <Button size='medium' variant='primary' component={Link} to={to}>
      {content}
    </Button>
  );
}
