import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
`

export const FieldStyle = styled(Field)`
padding: 15px;
margin-right: 20px;
width: 400px;
font-size: ${p => p.theme.fontSizes.m}px;
border: 1px solid ${p => p.theme.color.hover};
background-color: ${p => p.theme.color.bg};
`