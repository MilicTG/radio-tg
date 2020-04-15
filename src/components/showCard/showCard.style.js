import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const cardContainer = styled.div`
   margin: 0 auto;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   transition: all 0.2s ease-in-out;
   background-color: white;
   a {
      text-decoration: none;
   }
   :hover {
      box-shadow: 7px 7px 30px -20px rgba(66, 66, 66, 0.7);
   }
`;

export const cardTitle = styled.h2`
   color: ${theme.colorFont};
   font-size: ${theme.fontSizeFour};
   font-weight: 600;
   padding: 1.7rem 0 0 1.7rem;
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeFour};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeFour};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeFive};
   }
   @media ${device.deviceDesktopHD} {
      font-size: ${theme.fontSizeFive};
   }
`;

export const cardImg = styled.img`
   width: 100%;
   height: 30%;
   border-radius: 5px 5px 0 0;
   filter: grayscale(50%);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   :hover {
      transform: scale3d(0.2);
   }
`;

export const cardDesc = styled.p`
   color: ${theme.colorFont};
   width: 90%;
   font-size: ${theme.fontSizeThree};
   letter-spacing: 1px;
   height: 18rem;
   padding: 1.5rem;
   font-weight: 400;
   text-align: start;

   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeThree};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeThree};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeFour};
   }
   @media ${device.deviceDesktopHD} {
      font-size: ${theme.fontSizeFour};
   }
`;

export const cardTime = styled.p`
   color: ${theme.colorPrimary};
   font-size: ${theme.fontSizeTwo};
   padding: 1.5rem 0 1.5rem 1.5rem;

   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeTwo};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeTwo};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeThree};
   }
`;
