import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const noticeWrapper = styled.section`
   width: 100%;
   height: 5rem;
   border-bottom: solid 1px ${theme.colorFont};
   margin: 7rem 0;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media ${device.devicePhone} {
      justify-content: center;
      flex-flow: column;
   }
   @media ${device.deviceTablet} {
      justify-content: space-between;
      flex-flow: row;
   }
   @media ${device.deviceTabletLand} {
      justify-content: space-between;
      flex-flow: row;
   }
   @media ${device.deviceDesktop} {
      justify-content: space-between;
      flex-flow: row;
   }
`;

export const noticeTitle = styled.h3`
   font-size: 1.8rem;
   color: ${theme.colorFont};
   padding: 0 0 0.3rem 1rem;
   @media ${device.devicePhone} {
      font-size: 1.5rem;
      padding: 0 0 2rem 0;
   }
   @media ${device.deviceTablet} {
      font-size: 1.6rem;
      padding: 0 0 0.3rem 1rem;
   }
   @media ${device.deviceTabletLand} {
      font-size: 1.8rem;
      padding: 0 0 0.3rem 1rem;
   }
   @media ${device.deviceDesktop} {
      font-size: 1.8rem;
      padding: 0 0 0.3rem 1rem;
   }
`;
