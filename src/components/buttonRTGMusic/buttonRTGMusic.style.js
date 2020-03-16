import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

const buttonContainer = styled.button`
   display: flex;
   width: 17rem;
   height: 5rem;
   background: ${theme.colorSecondary};
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
      font-size: 1.8rem;
   }

   :hover {
      box-shadow: 3px 10px 28px -13px rgba(33, 33, 33, 0.2);
      cursor: pointer;
      background: ${theme.colorPrimary};
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;

export default buttonContainer;
