import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Link to="/">Back</Link>
      <h2>404 Ooops, something broke. Try again please...</h2>
    </>
  );
}

export default NotFound;
