import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

const buttonContainer = styled.button`
   display: flex;
   width: 16rem;
   height: 4.5rem;
   background: ${theme.colorPrimary};
   border-radius: 5rem;
   border: none;
   padding: 0 20px;
   align-items: center;
   transition: all 0.2s ease-in-out;
   color: white;
   outline: none;
   p {
      display: flex;
      align-items: center;
      width: 100%;
      display: inherit;
      justify-content: space-between;
      font-size: ${theme.fontSizeThree};
   }

   :hover {
      box-shadow: 3px 10px 28px -13px rgba(33, 33, 33, 0.2);
      cursor: pointer;
      background: ${theme.colorSecondary};
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;

export default buttonContainer;
