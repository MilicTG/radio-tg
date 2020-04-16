import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const buttonContainer = styled.button`
   background: ${theme.colorPrimary};
   border: none;
   border-radius: 1rem;
   transition: all 0.2s ease-in-out;
   cursor: pointer;
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(33, 33, 33, 0.2);
      cursor: pointer;
      background: ${theme.colorSecondary};
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
   :focus {
      background: ${theme.colorPrimary};
   }
   @media ${device.devicePhone} {
      display: none;
   }
   @media ${device.deviceTablet} {
      width: 9rem;
      height: 4rem;
   }
   @media ${device.deviceTabletLand} {
      width: 11rem;
      height: 4.5rem;
   }
   @media ${device.deviceDesktop} {
      width: 14rem;
      height: 5.5rem;
   }
`;

export const buttonText = styled.p`
   color: white;
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeTwo};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeTwo};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeTwo};
   }
   @media ${device.deviceDesktopHD} {
      font-size: ${theme.fontSizeTwo};
   }
`;
