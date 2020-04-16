import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const buttonWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-flow: row;
   padding: 10rem 0 7rem 0;
   @media ${device.devicePhone} {
      display: none;
   }
`;

export const scheduleWrapper = styled.div`
   display: flex;
   justify-content: center;
   padding-bottom: 10rem;
   @media ${device.devicePhone} {
      flex-flow: column;
   }
   @media ${device.deviceTablet} {
      flex-flow: column;
   }
   @media ${device.deviceTabletLand} {
      flex-flow: row;
   }
   @media ${device.deviceDesktop} {
      flex-flow: row;
   }

   table {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      width: 100%;
      padding-top: 3rem;
      thead {
         width: 100%;
         color: ${theme.colorFont};
         font-size: 2.8rem;
         padding-bottom: 5rem;
         display: inherit;
         flex-flow: row;
         justify-content: space-evenly;
      }
      tbody {
         padding: 0 2rem 2rem 2rem;
         display: inherit;
         flex-flow: row;
         justify-content: space-evenly;
         @media ${device.devicePhone} {
         }
         @media ${device.deviceTablet} {
         }
         @media ${device.deviceTabletLand} {
         }
         @media ${device.deviceDesktop} {
         }
         @media ${device.deviceDesktopHD} {
         }
         tr {
            display: flex;
            flex-flow: column;
            width: 100%;
            td {
               justify-content: start;
               display: inherit;
               flex-flow: row;
               padding: 2.7rem 0;
               border-bottom: 0.09px solid ${theme.colorFont};
               h4 {
                  font-size: 1.6rem;
                  color: ${theme.colorFont};
               }
               p {
                  display: block;
                  width: 5rem;
                  color: ${theme.colorPrimary};
                  font-size: 1.4rem;
                  padding: 0 7rem 0 0;
               }
            }
         }
      }
   }
`;
