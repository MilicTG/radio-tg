import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url("'https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700&display=swap");

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
