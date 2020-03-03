import styled from 'styled-components';
import { theme } from '../../styles/theme';

const buttonContainer = styled.button`
   width: 17rem;
   height: 6.5rem;
   border-radius: 1rem;
   background: transparent;
   border: solid 1.5px #fff;
   padding: 0 25px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   transition: all 0.2s ease-in-out;
   .transparent-button-text {
      font-size: ${theme.fontSizeS};
      padding: 0;
   }
   &:hover {
      box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
      cursor: pointer;
      background: white;
      .transparent-button-text {
         color: ${theme.colorFont};
      }
   }
   &:active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;

export default buttonContainer;
