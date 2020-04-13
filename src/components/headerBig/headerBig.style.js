import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const headerImage = styled.header`
   width: 100%;
   height: 90vh;
   min-height: 50rem;
   max-height: 100rem;
   background-image: url(${(props) => props.background});
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
`;

export const headerOverlay = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   @media ${device.devicePhone} {
      background-image: linear-gradient(
         to left,
         rgba(33, 33, 33, 0.7),
         rgba(33, 33, 33, 0.7)
      );
   }
   @media ${device.deviceTablet} {
      background-image: linear-gradient(
         to left,
         rgba(33, 33, 33, 0.7),
         rgba(33, 33, 33, 0.7)
      );
   }
   @media ${device.deviceTabletLand} {
      background-image: linear-gradient(
         to left,
         rgba(33, 33, 33, 0.1),
         rgba(33, 33, 33, 0.9)
      );
   }
   @media ${device.deviceDesktop} {
      background-image: linear-gradient(
         to left,
         rgba(33, 33, 33, 0.1),
         rgba(33, 33, 33, 0.9)
      );
   }
`;

export const headerText = styled.div`
   padding-top: 1rem;
   text-align: center;
   color: #fff;
   h1 {
      display: inline;
      @media ${device.devicePhone} {
         font-size: ${theme.fontSizeHeaderTitlePhone};
      }
      @media ${device.deviceTablet} {
         font-size: ${theme.fontSizeHeaderTitleTabPort};
      }
      @media ${device.deviceTabletLand} {
         font-size: ${theme.fontSizeHeaderTitleTabLand};
      }
      @media ${device.deviceDesktop} {
         font-size: ${theme.fontSizeHeaderTitleDesk};
      }
   }
   #radio {
      font-weight: 700;
   }
   #city {
      font-weight: 100;
   }

   h4 {
      padding-top: 40px;
      font-weight: 100;
      letter-spacing: 0.3rem;
      @media ${device.devicePhone} {
         font-size: ${theme.fontSizeHeaderDescPhone};
      }
      @media ${device.deviceTablet} {
         font-size: ${theme.fontSizeHeaderDescTab};
      }
      @media ${device.deviceTabletLand} {
         font-size: ${theme.fontSizeHeaderDescTabLand};
      }
      @media ${device.deviceDesktop} {
         font-size: ${theme.fontSizeHeaderDescDesk};
      }
   }
   @media ${device.deviceTabletLand} {
      text-align: start;
   }
   @media ${device.deviceDesktop} {
      text-align: start;
   }
`;

export const buttonWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   @media ${device.devicePhone} {
      justify-content: center;
   }
   @media ${device.deviceTablet} {
      justify-content: center;
   }
   @media ${device.deviceTabletLand} {
      justify-content: flex-start;
   }
   @media ${device.deviceDesktop} {
      justify-content: flex-start;
   }
`;
