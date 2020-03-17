import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const infoSectionContainer = styled.section`
   width: 100%;
   min-height: 40rem;
   background-color: ${props =>
      props.color ? `${theme.colorLightBck}` : `white;`};

   @media ${device.devicePhone} {
      padding: 2rem 0;
   }
   @media ${device.deviceTablet} {
      padding: 4.5rem 0;
   }
   @media ${device.deviceTabletLand} {
      padding: 4.5rem 0;
   }
   @media ${device.deviceDesktop} {
      padding: 5rem 0;
   }
   @media ${device.deviceDesktopHD} {
      padding: 5rem 0;
   }
`;

export const textInfoSide = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: column;
   padding: 2.5rem 0 2.5rem 0;
   @media ${device.deviceTablet} {
      padding: 3rem 0 3rem 0;
      flex-flow: row;
   }
   @media ${device.deviceTabletLand} {
      padding: 4rem 0 4rem 0;
      flex-flow: row;
   }
   @media ${device.deviceDesktop} {
      padding: 5.5rem 0 5.5rem 0;
      flex-flow: row;
   }
`;

export const infoTextWrapper = styled.div`
   display: flex;
   flex-flow: column;
   justify-content: center;
   text-align: center;
   width: 100%;
   &.left {
      @media ${device.devicePhone} {
         padding: 0;
      }
      @media ${device.deviceTablet} {
         padding: 0 5rem 0 0;
      }
      @media ${device.deviceTabletLand} {
         padding: 0 15rem 0 0;
      }
      @media ${device.deviceDesktop} {
         padding: 0 15rem 0 0;
      }
      @media ${device.deviceDesktopHD} {
         padding: 0 15rem 0 0;
      }
   }
   &.right {
      @media ${device.devicePhone} {
         padding: 0;
      }
      @media ${device.deviceTablet} {
         padding: 0 0 0 5rem;
      }
      @media ${device.deviceTabletLand} {
         padding: 0 0 0 5rem;
      }
      @media ${device.deviceDesktop} {
         padding: 0 0 0 5rem;
      }
      @media ${device.deviceDesktopHD} {
         width: 70%;
         padding: 0 0 0 5rem;
      }
   }
`;

export const infoTextTitle = styled.h3`
   color: ${theme.colorFont};
   text-align: center;
   font-weight: 500;
   padding-bottom: 5rem;
   @media ${device.devicePhone} {
      font-size: 7vw;
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeBig};
      text-align: start;
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeBig1X};
      text-align: start;
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeBig2X};
      text-align: start;
   }
`;

export const infoText = styled.article`
   color: ${theme.colorFont};
   text-align: center;
   font-weight: 400;
   font-size: ${theme.fontSizeSmall1X};
   padding-bottom: 2rem;
   .rowOne {
      padding-bottom: 1.5rem;
   }
   .rowTwo {
      padding-bottom: 1.5rem;
   }
   .rowThree {
      padding-bottom: 1.5rem;
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeNorm};
      text-align: start;
      padding-bottom: 0;
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeNorm};
      text-align: start;
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeBig};
      text-align: start;
   }
`;

export const infoImg = styled.img`
   border-radius: 10px;
   width: 100%;
   height: auto;
   margin: 0 auto;
   filter: grayscale(50%);
   background-image: ${props => props.image};
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   object-fit: cover;
   @media ${device.deviceTablet} {
      width: 30rem;
      height: 40rem;
   }
   @media ${device.deviceTabletLand} {
      width: 30rem;
      height: 45rem;
   }
   @media ${device.deviceDesktop} {
      width: 35rem;
      height: 50rem;
   }
   @media ${device.deviceDesktopHD} {
      width: 45rem;
      height: 50rem;
   }
`;
