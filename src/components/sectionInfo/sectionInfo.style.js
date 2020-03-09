import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const infoSectionContainer = styled.section`
   width: 100%;
   min-height: 40rem;
   padding: 5rem 0;
   background-color: ${props =>
      props.color ? `${theme.colorLightBck}` : `white;`};
`;

export const textInfoSide = styled.div`
   width: 100%;
   display: grid;
   padding: 2.5rem 0 2.5rem 0;
   grid-template-columns: 1fr;
   grid-column-gap: 3rem;

   @media ${device.deviceTablet} {
      padding: 3rem 0 3rem 0;
      grid-template-columns: 1fr;
   }
   @media ${device.deviceTabletLand} {
      padding: 4rem 0 4rem 0;
      grid-template-columns: 1fr;
   }
   @media ${device.deviceDesktop} {
      padding: 5.5rem 0 5.5rem 0;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5rem;
   }
`;

export const infoTextWrapper = styled.div`
   display: flex;
   flex-flow: column;
   justify-content: space-between;
   text-align: center;
   width: 80%;
`;

export const infoTextTitle = styled.h3`
   color: ${theme.colorFont};
   text-align: center;
   font-size: ${theme.fontSizeS};
   font-weight: 500;
   padding-bottom: 1.5rem;
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeM};
      text-align: center;
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeM};
      text-align: center;
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeL};
      text-align: start;
   }
`;

export const infoText = styled.article`
   color: ${theme.colorFont};
   text-align: center;
   font-weight: 400;
   font-size: ${theme.fontSizeXS};
   padding-bottom: 2rem;
   .rowOne {
      padding-bottom: 1rem;
   }
   .rowTwo {
      padding-bottom: 1rem;
   }
   .rowThree {
      padding-bottom: 1rem;
   }
   @media ${device.deviceTablet} {
      font-size: ${theme.fontSizeXS};
      text-align: start;
      padding-bottom: 0;
   }
   @media ${device.deviceTabletLand} {
      font-size: ${theme.fontSizeXS};
      text-align: start;
   }
   @media ${device.deviceDesktop} {
      font-size: ${theme.fontSizeXS};
      text-align: start;
   }
`;

export const infoImg = styled.img`
   border-radius: 10px;
   height: 20rem;
   margin: 0 auto;
   background-image: ${props => props.image};
   background-repeat: no-repeat;
   background-position: left top;
   background-size: cover;
   @media ${device.deviceTablet} {
      height: 25rem;
      margin: 0;
   }
   @media ${device.deviceTabletLand} {
      height: 30rem;
      margin: 0;
   }
   @media ${device.deviceDesktop} {
      height: 35rem;
      margin: 0;
   }
`;
