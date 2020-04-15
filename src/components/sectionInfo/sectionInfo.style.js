import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const infoSectionContainer = styled.section`
   width: 100%;
   min-height: 40rem;

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
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-flow: column;
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
   align-content: flex-start;
   text-align: center;
   height: 100%;
   width: 100%;

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
`;

export const infoTextTitle = styled.h3`
   color: ${theme.colorFont};
   text-align: center;
   font-weight: 500;
   @media ${device.devicePhone} {
      font-size: ${theme.fontSizeFive};
      padding-bottom: 4rem;
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeSix};
      padding-bottom: 5rem;

      text-align: start;
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeSix};
      padding-bottom: 5rem;

      text-align: start;
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeSeven};
      padding-bottom: 6rem;

      text-align: start;
   }
`;

export const infoText = styled.article`
   color: ${theme.colorFont};
   text-align: start;
   font-weight: 400;
   font-size: ${theme.fontSizeThree};
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
      font-size: ${theme.fontSizeThree};
      text-align: start;
      padding-bottom: 0;
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeThree};
      text-align: start;
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeFour};
      text-align: start;
   }
`;

export const infoImg = styled.img`
   border-radius: 10px;
   width: 100%;
   height: auto;
   margin: 0 auto;
   filter: grayscale(50%);
   background-image: ${(props) => props.image};
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   object-fit: cover;
   @media ${device.deviceTablet} {
      width: 35rem;
      height: 50rem;
   }
   @media ${device.deviceTabletLand} {
      width: 35rem;
      height: 50rem;
   }
   @media ${device.deviceDesktop} {
      width: 47rem;
      height: 38rem;
   }
   @media ${device.deviceDesktopHD} {
      width: 50rem;
      height: 40rem;
   }
`;
