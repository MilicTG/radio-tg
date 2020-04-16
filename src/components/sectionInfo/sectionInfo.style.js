import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const infoSectionContainer = styled.section`
   width: 100%;
   @media ${device.devicePhone} {
      padding: 2rem 0;
   }
   @media ${device.deviceTablet} {
      padding: 3rem 0;
   }
   @media ${device.deviceTabletLand} {
      padding: 3rem 0;
   }
   @media ${device.deviceDesktop} {
      padding: 5rem 0 6rem 0;
   }
   @media ${device.deviceDesktopHD} {
      padding: 5rem 0 7rem 0;
   }
   a {
      text-decoration: none;
      color: ${theme.colorPrimary};
      cursor: pointer;
      font-size: ${theme.fontSizeFour};
      padding: 5rem 0;
      text-align: start;
      transition: all 0.3s ease;
      :hover {
         color: ${theme.colorSecondary};
         transition: all 0.3s ease-out;
      }
   }
`;

export const textInfoSide = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: start;
   flex-flow: column;
   @media ${device.deviceTablet} {
      flex-flow: row;
   }
   @media ${device.deviceTabletLand} {
      flex-flow: row;
   }
   @media ${device.deviceDesktop} {
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
      padding: 0 10rem 0 0;
   }
   @media ${device.deviceDesktop} {
      padding: 0 10rem 0 0;
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
      padding-bottom: 2rem;
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeSix};
      padding-bottom: 3rem;

      text-align: start;
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeSix};
      padding-bottom: 5rem;

      text-align: start;
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeSeven};
      padding-bottom: 5rem;

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
      padding-bottom: 0;
   }
   @media ${device.deviceTabletLand} {
      width: 35rem;
      height: 50rem;
      padding-bottom: 0;
   }
   @media ${device.deviceDesktop} {
      width: 47rem;
      height: 38rem;
      padding-bottom: 0;
   }
   @media ${device.deviceDesktopHD} {
      width: 50rem;
      height: 40rem;
      padding-bottom: 0;
   }
`;
