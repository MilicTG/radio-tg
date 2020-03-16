import styled from 'styled-components';

import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const buttonContainer = styled.button`
   display: flex;
   width: 13.5rem;
   height: 4.5rem;
   background: #fff;
   border-radius: 5rem;
   border: none;
   margin: 100px 0 0 0;
   padding: 0 15px;
   align-items: center;
   transition: all 0.2s ease-in-out;
   p {
      color: ${theme.colorFont};
      width: 100%;
      display: inherit;
      justify-content: space-between;
      font-size: 1.3rem;
   }
   @media ${device.deviceTablet} {
      width: 15rem;
      height: 4.8rem;
      padding: 0 20px;
      p {
         font-size: 1.4rem;
      }
   }
   @media ${device.deviceDesktop} {
      width: 17rem;
      height: 5.5rem;
      p {
         font-size: 1.6rem;
      }
   }
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
      cursor: pointer;
      color: white;
      background: ${theme.colorSecondary};
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
      color: white;
      background: ${theme.colorSecondary};
   }
`;
