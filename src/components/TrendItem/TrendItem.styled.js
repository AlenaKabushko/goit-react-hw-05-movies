import styled from 'styled-components';

export const ItemStyle = styled.li`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
width: 300px;
height: 500px;
`

export const TitleStyle = styled.p`
color: ${p => p.theme.color.main};
font-size: ${p => p.theme.fontSizes.s}px;
text-decoration: none
`