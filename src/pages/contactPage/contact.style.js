import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const contactCardsWrapper = styled.section`
   width: 100%;
   display: grid;
   grid-column-gap: 1rem;
   margin-bottom: 5rem;
   @media ${device.devicePhone} {
      grid-template-columns: 1fr;
      grid-row-gap: 1rem;
   }
   @media ${device.deviceTablet} {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 2rem;
   }
   @media ${device.deviceTabletLand} {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1rem;
   }
   @media ${device.deviceDesktop} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 0.5rem;
   }
   @media ${device.deviceDesktopHD} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
   }
`;
