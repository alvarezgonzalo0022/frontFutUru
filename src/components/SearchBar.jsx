import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar(props) {

    const { players, setValue, value } = props;

  return (
    <Autocomplete
      id="player-select-demo"
      sx={{ width: 300 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      options={players}    
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        <img
            loading="eager"
            width="20"
            src={option.country.flag.toLowerCase()}
            alt=""
          />
          <img
            loading="eager"
            width="20"
            src={option.playerImg.toLowerCase()}
            alt=""
          />
          {option.name} ({option.position} - {option.birthdate.split('T')[0]})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a player"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}