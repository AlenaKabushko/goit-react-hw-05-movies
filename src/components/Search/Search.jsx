import Box from '../Box';
import SearchDetails from '../SearchDetails/SearchDetails';
import { Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { FormStyle, FieldStyle } from './Form.styled';
import { BsSearch } from 'react-icons/bs';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = values => {
    const { input } = values;
    setSearchParams({ query: input });
  };

  return (
    <Box bg="#ffe4e4" flexDirection="column">
      <div>
        <Formik initialValues={{ input: query }} onSubmit={handleSubmit}>
          <FormStyle>
            <FieldStyle
              name="input"
              type="text"
              autoComplete="on"
              autoFocus
              placeholder="Search movie"
            ></FieldStyle>
            <button type="submit">
              <BsSearch size={20} />
            </button>
          </FormStyle>
        </Formik>
      </div>
      {query && <SearchDetails query={query} />}
    </Box>
  );
}

export default Search;
