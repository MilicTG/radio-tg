import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const noticeWrapper = styled.section`
   width: 100%;
   border-bottom: solid 1px ${theme.colorFont};
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media ${device.devicePhone} {
      text-align: center;
      margin: 3rem 0;
      justify-content: center;
      flex-flow: column;
   }
   @media ${device.deviceTablet} {
      text-align: start;
      margin: 4rem 0;
      justify-content: space-between;
      flex-flow: row;
   }
   @media ${device.deviceTabletLand} {
      margin: 5rem 0;
      justify-content: space-between;
      flex-flow: row;
   }
   @media ${device.deviceDesktop} {
      margin: 5rem 0;
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
      padding: 0 0 1rem 0;
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

export const noticeDownload = styled.a`
   color: ${theme.colorFont};
   cursor: pointer;
   text-decoration: none;
   @media ${device.devicePhone} {
      font-size: 1.2rem;
   }
   @media ${device.deviceTablet} {
      font-size: 1.5rem;
      padding: 0 1rem 0.3rem 0;
   }
   @media ${device.deviceTabletLand} {
      font-size: 1.6rem;
      padding: 0 1rem 0.3rem 0;
   }
   @media ${device.deviceDesktop} {
      font-size: 1.6rem;
      padding: 0 1rem 0.3rem 0;
   }
`;
