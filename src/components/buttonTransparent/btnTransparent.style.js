import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

const buttonContainer = styled.button`
   display: flex;
   width: 14rem;
   height: 4.2rem;
   background: transparent;
   border-radius: 3rem;
   border: solid 1.5px #fff;
   margin: 100px 0 0 0;
   padding: 0 15px;
   align-items: center;
   transition: all 0.2s ease-in-out;
   color: white;
   margin-left: 5rem;
   p {
      width: 100%;
      display: inherit;
      justify-content: space-between;
      font-size: ${theme.fontSizeSmall1X};
   }
   @media ${device.devicePhone} {
      display: none;
   }
   @media ${device.deviceTablet} {
      display: none;
      width: 15rem;
      height: 4.8rem;
      padding: 0 20px;
      p {
         font-size: ${theme.fontSizeSmall1X};
      }
   }
   @media ${device.deviceDesktop} {
      display: flex;
      width: 17rem;
      height: 5.5rem;
      p {
         font-size: ${theme.fontSizeNorm};
      }
   }
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
      cursor: pointer;
      background: white;
      color: ${theme.colorFont};
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;

export default buttonContainer;
