import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
padding: ${p=> p.theme.spase[4]}px;
color: ${p => p.theme.color.main};
font-size: ${p => p.theme.fontSizes.m}px;
text-decoration: none;

&.active {
    color: ${p => p.theme.color.active}
}

&:hover:not(.active){
color: ${p => p.theme.color.hover}
}
`