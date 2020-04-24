import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const footerContainer = styled.footer`
   width: 100%;
   background-color: ${theme.colorTertiary};
`;

export const footerInfoContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-row-gap: 2rem;
   padding: 4rem 0;
   @media ${device.deviceTablet} {
      justify-self: stretch;
      grid-column-gap: 10rem;
      grid-row-gap: 2rem;
      grid-template-columns: 1fr 1fr;
   }
   @media ${device.deviceTabletLand} {
      justify-self: stretch;
      grid-column-gap: 10rem;
      grid-row-gap: 2rem;
      grid-template-columns: 1fr 1fr;
   }
   @media ${device.deviceDesktop} {
      grid-column-gap: 5rem;
      grid-template-columns: 1fr 1fr 1fr 1fr;
   }
`;

export const footerInfoColumn = styled.div`
   display: flex;
   flex-flow: column;
   h3 {
      color: ${theme.colorSecondary};
      font-size: ${theme.fontSizeFour};
      padding: 1rem 0;
      text-align: start;
   }
   table {
      display: table;
      tr {
         display: table-cell;
         text-align: start;
         td {
            font-size: ${theme.fontSizeThree};
            font-weight: 300;
            padding: 0.7rem 0;
            display: block;
            color: white;
            a {
               text-decoration: none;
               color: white;
               cursor: pointer;
            }
         }
      }
   }
   @media ${device.deviceTablet} {
      h3 {
         font-size: ${theme.fontSizeFour};
      }
      table {
         tr {
            text-align: start;
            td {
               font-size: ${theme.fontSizeThree};
            }
         }
      }
   }
   @media ${device.deviceTabletLand} {
      h3 {
         font-size: ${theme.fontSizeFour};
      }
      table {
         tr {
            text-align: start;
            td {
               font-size: ${theme.fontSizeThree};
            }
         }
      }
   }
   @media ${device.deviceDesktop} {
      h3 {
         font-size: ${theme.fontSizeFive};
      }
      table {
         tr {
            text-align: left;
            td {
               font-size: ${theme.fontSizeThree};
            }
         }
      }
   }
`;
