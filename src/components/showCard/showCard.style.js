import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const cardContainer = styled.div`
   width: 100%;
   padding-bottom: 2.5rem;
   margin: 0 auto;
   cursor: pointer;
   border: 1px solid #ccc;
   border-radius: 5px;
   transition: all 0.2s ease-in-out;
   :hover {
      border: 1.1px solid #777;
   }
   a {
      text-decoration: none;
   }
`;

export const cardTitle = styled.h2`
   color: ${theme.colorFont};
   font-size: 2rem;
   font-weight: 500;
   padding: 1.5rem 0 0 1.5rem;
   @media ${device.deviceTablet} {
      font-size: 1.8rem;
   }
   @media ${device.deviceTabletLand} {
      font-size: 2.1rem;
   }
   @media ${device.deviceDesktop} {
      font-size: 2.3rem;
   }
`;

export const cardImg = styled.img`
   width: 100%;
   border-radius: 5px 5px 0 0;
   filter: grayscale(50%);
`;

export const cardDesc = styled.p`
   color: ${theme.colorFont};
   font-size: 1.4rem;
   height: 15rem;
   width: 90%;
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
   padding: 1.5rem 0 0 1.5rem;

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
