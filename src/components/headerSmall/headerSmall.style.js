import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const smallHeaderContainer = styled.header`
   width: 100%;
   background: url(${(props) => props.background});
   background-repeat: no-repeat;
   background-position: left center;
   background-size: cover;
   @media ${device.devicePhone} {
      height: 15rem;
   }
   @media ${device.deviceTablet} {
      height: 20rem;
   }
   @media ${device.deviceTabletLand} {
      height: 20rem;
   }
   @media ${device.deviceDesktop} {
      height: 25rem;
   }
   @media ${device.deviceDesktopHD} {
      height: 30rem;
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
      font-size: ${theme.fontSizeFive};
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeFive};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeSix};
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeSeven};
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
