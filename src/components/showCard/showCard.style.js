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
   font-size: ${theme.fontSizeHeaderTitleDesk};
   font-weight: 500;
   padding: 1.7rem 0 0 1.7rem;
   @media ${device.deviceTablet} {
      font-size: 1.8rem;
   }
   @media ${device.deviceTabletLand} {
      font-size: 1.8rem;
   }
   @media ${device.deviceDesktop} {
      font-size: 2rem;
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
   font-size: 1.4rem;
   letter-spacing: 1px;
   height: 15rem;
   padding: 1.5rem;
   font-weight: 300;
   text-align: start;

   @media ${device.deviceTablet} {
      font-size: 1.6rem;
   }
   @media ${device.deviceTabletLand} {
      font-size: 1.6rem;
   }
   @media ${device.deviceDesktop} {
      font-size: 1.8rem;
   }
`;

export const cardTime = styled.p`
   color: ${theme.colorSecondary};
   font-size: 1.2rem;
   padding: 2rem 0 2rem 1.5rem;

   @media ${device.deviceTablet} {
      font-size: 1.2rem;
   }
   @media ${device.deviceTabletLand} {
      font-size: 1.2rem;
   }
   @media ${device.deviceDesktop} {
      font-size: 1.4rem;
   }
`;
