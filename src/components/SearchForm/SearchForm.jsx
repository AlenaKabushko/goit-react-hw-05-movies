// import PropTypes from 'prop-types';
// import { Formik } from 'formik';
// import { useSearchParams } from 'react-router-dom';
// import { FormStyle, FieldStyle } from './SearchForm.styled';
// import { BsSearch } from 'react-icons/bs';

// function SearchForm({ onInput }) {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';

//   const handleSubmit = values => {
//     const { input } = values;
//     setSearchParams({ query: input });
//     onInput(input);
//   };
//   return (
//     <div>
//       <Formik initialValues={{ input: query }} onSubmit={handleSubmit}>
//         <FormStyle>
//           <FieldStyle
//             name="input"
//             type="text"
//             autoComplete="on"
//             autoFocus
//             placeholder="Search movie"
//             value={Formik.input}
//           ></FieldStyle>
//           <button type="submit">
//             <BsSearch size={20} />
//           </button>
//         </FormStyle>
//       </Formik>
//     </div>
//   );
// }

// export default SearchForm;

// SearchForm.propTypes = {
//   onInput: PropTypes.func,
// };
