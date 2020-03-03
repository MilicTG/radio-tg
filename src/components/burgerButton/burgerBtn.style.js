import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const burgerBtnContainer = styled.button`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 25px;
   width: 35px;
   background: transparent;
   border: none;
   transition: all 0.25s ease;
   box-sizing: border-box;
   transform-origin: center;
   z-index: 10;
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
      height: 3px;
      background: ${theme.colorFont};
      transition: all 0.5s ease;
      transform-origin: center;
      &.active-top {
         transform: translateY(200%) rotate(45deg);
      }
      &.active-mid {
         display: none;
      }
      &.active-bottom {
         transform: translateY(-200%) rotate(-45deg);
      }
   }
`;
