import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags(props) {
  return (
    <Stack spacing={3} sx={{ width: 300 }}>
    
      <Autocomplete
        multiple
        id="tags-outlined"
        options={topTags}
        getOptionLabel={(option) => option.title}
        defaultValue={[topTags[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Please select post tags"
            placeholder="tags"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topTags = [
  { title: 'Blockchain' },
  { title: 'Crypto' },
  { title: 'Smart Contracts' },
  { title: 'Solidity' },
  { title: 'Web3' },
  { title: 'IT' },
  { title: 'Dev' },
  { title: 'E-learning' },
  { title: 'Programming' },
  { title: 'Javascript' },
  { title: 'Nodejs' },
  { title: 'Reactjs' },
  { title: 'Other' },
];