import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const BurgerBtn = () => (
   <BurgerBtnContainer>
      <div />
      <div />
      <div />
   </BurgerBtnContainer>
);

const BurgerBtnContainer = styled.button`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 24px;
   width: 30px;
   background: transparent;
   border: none;
   cursor: pointer;
   padding: 0;
   box-sizing: border-box;
   :focus {
      outline: none;
   }
   @media (min-width: 769px) {
      display: none;
   }

   div {
      width: 30px;
      height: 2px;
      background: ${theme.colorFont};
   }
`;

export default BurgerBtn;
