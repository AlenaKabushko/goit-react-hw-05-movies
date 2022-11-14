import { NavLinkStyle } from './AppBar.styled';
import Box from '../Box';

const navigateItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

function AppBar() {
  return (
    <Box as="nav">
      {navigateItems.map(({ href, text }) => (
        <NavLinkStyle to={href} key={href} end>
          {text}
        </NavLinkStyle>
      ))}
    </Box>
  );
}

export default AppBar;
