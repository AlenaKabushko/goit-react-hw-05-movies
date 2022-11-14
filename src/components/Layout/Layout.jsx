import { Outlet } from 'react-router-dom';
import Box from '../Box';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

function Layout() {
  return (
    <>
      <Box as="header">
        <AppBar />
      </Box>
      <Suspense fallback={Loading.pulse('Loading')}>
        <Box as="main" bg="#ffe4e4" flexDirection="column">
          {Loading.remove()}
          <Outlet />
        </Box>
      </Suspense>
    </>
  );
}

export default Layout;
