import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import '../../stylesheets/searchBar.scss';

export default function SearchBar({ setSearchQuery }) {
  return (
    <form id='search-bar'>
      <div id='input-field'>
        <TextField
          fullWidth
          id='search-bar'
          className='text'
          onInput={(event) => {
            setSearchQuery(event.target.value.toLowerCase());
          }}
          label='Search the recipes...'
          variant='outlined'
          placeholder='Search...'
          size='small'
        />
      </div>

      <IconButton type='submit' aria-label='search'>
        <SearchIcon style={{ fill: 'black' }} />
      </IconButton>
    </form>
  );
}
