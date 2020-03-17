import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const smallHeaderContainer = styled.header`
   width: 100%;
   background: url(${props => props.background});
   background-repeat: no-repeat;
   background-position: left center;
   background-size: cover;
   @media ${device.devicePhone} {
      height: 20vh;
   }
   @media ${device.deviceTablet} {
      height: 20vh;
   }
   @media ${device.deviceTabletLand} {
      height: 20vh;
   }
   @media ${device.deviceDesktop} {
      height: 30vh;
   }
   @media ${device.deviceDesktopHD} {
      height: 30vh;
   }
`;

export const smallHeaderOverlay = styled.div`
   background-color: rgba(33, 33, 33, 0.7);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

export const smallHeaderTitle = styled.h2`
   color: white;
   text-align: center;
   padding-bottom: 3rem;
   @media ${device.devicePhone} {
      font-size: 6vw;
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeBig1X};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeBig2X};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeBig3X};
   }
`;

export const smallHeaderDesc = styled.p`
   color: white;
   font-weight: 300;
   text-align: center;
   @media ${device.devicePhone} {
      font-size: 1.3rem;
   }
   @media ${device.deviceTablet} {
      font-size: 1.8rem;
   }
   @media ${device.deviceTabletLand} {
      font-size: 1.8rem;
   }
   @media ${device.deviceDesktop} {
      font-size: 2rem;
   }
`;
