import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function SecondaryButton({ content, to }) {
  return (
    <Button size='medium' variant='secondary' component={Link} to={to}>
      {content}
    </Button>
  );
}
