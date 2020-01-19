import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,400,500,700&display=swap');

*,
*::after,
*::before {
  margin: 0px;
  padding: 0px;
  box-sizing: inherit
}


html{
  font-size: 62.5%
}

body {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyles;
