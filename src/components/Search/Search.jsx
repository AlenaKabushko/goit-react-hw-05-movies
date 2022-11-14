import { useState } from 'react';
import Box from '../Box';
import SearchForm from '../SearchForm/SearchForm';
import SearchDetails from '../SearchDetails/SearchDetails';

function Search() {
  const [inputMovie, setInputMovie] = useState(null);

  return (
    <Box bg="#ffe4e4" flexDirection="column">
      <SearchForm onInput={setInputMovie} />
      {inputMovie && <SearchDetails inputMovie={inputMovie} />}
    </Box>
  );
}

export default Search;
