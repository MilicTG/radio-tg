import styled from 'styled-components';

import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const buttonContainer = styled.button`
   display: none;
   width: 14rem;
   height: 4.2rem;
   background: #fff;
   border-radius: 3rem;
   border: none;
   margin: 100px 0 0 0;
   padding: 0 15px;
   align-items: center;
   transition: all 0.2s ease-in-out;
   color: ${theme.colorFont};
   p {
      width: 100%;
      display: inherit;
      justify-content: space-between;
      font-size: ${theme.fontSizeButtonS};
   }
   @media ${device.deviceTablet} {
      display: flex;
      width: 15rem;
      height: 4.8rem;
      padding: 0 20px;
      p {
         font-size: ${theme.fontSizeButtonM};
      }
   }
   @media ${device.deviceDesktop} {
      display: flex;
      width: 17rem;
      height: 5.5rem;
      p {
         font-size: ${theme.fontSizeButtonL};
      }
   }
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
      cursor: pointer;
      background: ${theme.colorQuartile};
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;
