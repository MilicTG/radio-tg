import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import imgRadioTG from '../../../assets/img-rtg.jpg';
import imgDuvanjski from '../../../assets/img-duvanjski.jpg';

export const indexContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100vh;
   background: #333;
   display: flex;
`;

export const leftIndexSide = styled.div`
   width: 50%;
   height: 100%;
   overflow: hidden;
   left: 0;
   background-image: url(${imgRadioTG});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: left top;
   transition: 1000ms all ease-in-out;

   &.enter-left {
      width: 75%;
   }
   &.enter-right {
      width: 25%;
   }
`;

export const leftIndexOverlay = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(0, 106, 192, 0.5);
   transition: 1000ms all ease-in-out;
   display: flex;
   justify-content: center;
   align-items: center;
   h1 {
      color: white;
      font-size: ${theme.fontSizeXL};
   }
   &.enter-left {
      background-color: rgba(0, 106, 192, 0.5);
   }
   &.enter-right {
      background-color: rgba(33, 33, 33, 0.5);
   }
`;

export const rightIndexSide = styled.div`
   width: 50%;
   height: 100%;
   overflow: hidden;
   right: 0;
   background-image: url(${imgDuvanjski});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: left top;
   transition: 1000ms all ease-in-out;
   &.enter-right {
      width: 75%;
   }
   &.enter-left {
      width: 25%;
   }
`;

export const rightIndexOverlay = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(180, 82, 37, 0.5);
   transition: 1000ms all ease-in-out;
   display: flex;
   justify-content: center;
   align-items: center;
   h1 {
      color: white;
      font-size: ${theme.fontSizeXL};
   }
   &.enter-right {
      background-color: rgba(180, 82, 37, 0.5);
   }
   &.enter-left {
      background-color: rgba(33, 33, 33, 0.5);
   }
`;
