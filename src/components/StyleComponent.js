import { createGlobalStyle } from 'styled-components';
import styled from "@emotion/styled";
import { Card, Grid2 } from '@mui/material';


const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    background-color: #F3F3F3; /* Set your background color here */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const LoginPageCard = styled(Card)(() => ({
    width: "928px",
    height: "656px",
    borderRadius: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}))


export const CardCenterAligenment = styled(Grid2)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}))

export default GlobalStyle;
