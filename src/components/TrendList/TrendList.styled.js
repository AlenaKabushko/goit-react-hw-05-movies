import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: ${p => p.theme.spase[5]}px;
list-style: none;
`;