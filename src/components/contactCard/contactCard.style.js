import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const cardWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-flow: column;
   padding: 2rem 2rem;
   width: 100%;
   transition: all 0.2s ease-in-out;
   border-radius: 10px;
   @media ${device.devicePhone} {
   }
   @media ${device.deviceTablet} {
   }
   @media ${device.deviceTabletLand} {
   }
   @media ${device.deviceDesktop} {
      padding: 1rem 1rem;
   }
   @media ${device.deviceDesktopHD} {
      padding: 2rem 2rem;
   }
`;

export const cardIcon = styled.p`
   color: ${theme.colorPrimary};
   @media ${device.devicePhone} {
      font-size: ${theme.fontSizeTwo};
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeThree};
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeThree};
   }
   @media ${device.deviceDesktop} {
   }
   @media ${device.deviceDesktopHD} {
   }
`;

export const cardText = styled.div`
   padding: 2rem 0;
   color: ${theme.colorFont};
   text-align: center;
   h3 {
      font-weight: 500;
      @media ${device.devicePhone} {
         font-size: ${theme.fontSizeFour};
         padding: 2rem 0;
      }
      @media ${device.deviceTablet} {
         font-size: ${theme.fontSizeFive};
         padding: 2rem 0;
      }
      @media ${device.deviceTabletLand} {
         font-size: ${theme.fontSizeFive};
         padding: 2rem 0;
      }
      @media ${device.deviceDesktop} {
         font-size: ${theme.fontSizeFive};
         padding: 2rem 0;
      }
      @media ${device.deviceDesktopHD} {
         font-size: ${theme.fontSizeFive};
         padding: 2rem 0;
      }
   }
   p {
      @media ${device.devicePhone} {
         font-size: ${theme.fontSizeThree};
         padding: 1rem 0;
      }
      @media ${device.deviceTablet} {
         font-size: ${theme.fontSizeThree};
         padding: 1rem 0;
      }
      @media ${device.deviceTabletLand} {
         font-size: ${theme.fontSizeThree};
         padding: 1rem 0;
      }
      @media ${device.deviceDesktop} {
         font-size: ${theme.fontSizeThree};
         padding: 1rem 0;
      }
      @media ${device.deviceDesktopHD} {
         font-size: ${theme.fontSizeFour};
         padding: 1rem 0;
      }
   }
`;
