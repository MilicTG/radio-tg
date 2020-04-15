import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const titleSectionWrapper = styled.section`
   margin: 0 auto;
   text-align: center;

   @media ${device.devicePhone} {
      padding: 3.5rem 0;
   }
   @media ${device.deviceTablet} {
      padding: 5.5rem 0;
   }
   @media ${device.deviceTabletLand} {
      padding: 6.5rem 0;
   }
   @media ${device.deviceDesktop} {
      padding: 7.5rem 0;
   }
`;

export const primaryTitle = styled.h2`
   font-weight: 500;
   color: ${theme.colorFont};
   text-align: center;
   padding-bottom: 1.5rem;

   @media ${device.devicePhone} {
      font-size: ${theme.fontSizeFour};
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeFive};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeFive};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeSix};
   }
`;

export const descTitle = styled.p`
   font-weight: 300;
   color: ${theme.colorFont};
   text-align: center;
   white-space: pre-line;
   display: inline-block;
   @media ${device.devicePhone} {
      font-size: ${theme.fontSizeTwo};
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeThree};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeThree};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeFour};
   }
`;
