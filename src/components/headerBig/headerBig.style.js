import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

import headerImageSource from '../../assets/img-rtg.jpg';

export const headerImage = styled.header`
   width: 100%;
   height: 90vh;
   min-height: 50rem;
   max-height: 100rem;
   background-image: url(${headerImageSource});
   background-repeat: no-repeat;
   background-position: left top;
   background-size: cover;
`;

export const headerOverlay = styled.div`
   background-image: linear-gradient(
      to left,
      rgba(0, 164, 230, 0.5),
      rgba(0, 51, 87, 0.9)
   );
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
`;

export const headerText = styled.div`
   padding-top: 1rem;
   text-align: center;
   color: #fff;
   h1 {
      display: inline;
      @media ${device.devicePhone} {
         font-size: 7vw;
      }
      @media ${device.deviceTablet} {
         font-size: ${theme.fontSizeXL};
      }
      @media ${device.deviceTabletLand} {
         font-size: ${theme.fontSizeXXL};
      }
      @media ${device.deviceDesktop} {
         font-size: ${theme.fontSizeXXXL};
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
         font-size: ${theme.fontSizeXS};
      }
      @media ${device.deviceTablet} {
         font-size: ${theme.fontSizeM};
      }
      @media ${device.deviceTabletLand} {
         font-size: ${theme.fontSizeM};
      }
      @media ${device.deviceDesktop} {
         font-size: ${theme.fontSizeL};
      }
   }
   @media ${device.deviceTablet} {
      text-align: start;
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
   @media ${device.deviceTablet} {
      justify-content: flex-start;
   }
   @media ${device.deviceTabletLand} {
      justify-content: flex-start;
   }
   @media ${device.deviceDesktop} {
      justify-content: flex-start;
   }
`;
