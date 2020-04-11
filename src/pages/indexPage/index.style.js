import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const cardSectionContainer = styled.section`
   width: 100%;
   padding: 0 0 7rem 0;
   display: grid;
   grid-template-columns: 1fr;
   grid-row-gap: 3rem;

   @media ${device.deviceTablet} {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
   }
   @media ${device.deviceTabletLand} {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
   }
   @media ${device.deviceDesktop} {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 3rem;
   }
`;

export const aboutSectionContainer = styled.section`
   width: 100%;
   background-color: ${theme.colorLightBck};
`;
