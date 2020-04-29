import { createGlobalStyle } from 'styled-components';

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
  background-color: #F1F1F1;

  .custom-select{
    margin-top: 2rem;
    display: block;
      @media  (min-width: 600px) {
        display: none;}}

}

`;

export default GlobalStyles;
