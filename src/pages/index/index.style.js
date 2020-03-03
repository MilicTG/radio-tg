import styled from 'styled-components';
import { theme } from '../../styles/theme';
import imgRadioTG from '../../assets/img-rtg.jpg';
import imgDuvanjski from '../../assets/img-duvanjski.jpg';

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
   background-color: ${theme.colorPrimaryTransparent};
   transition: 1000ms all ease-in-out;
   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
   h1 {
      color: white;
      font-size: ${theme.fontSizeXL};
      white-space: nowrap;
   }
   p {
      color: white;
      white-space: nowrap;
      font-size: ${theme.fontSizeM};
      font-weight: 200;
      letter-spacing: 5px;
      padding: 3rem 0 6rem 0;
   }
   &.enter-left {
      background-color: ${theme.colorPrimaryTransparent};
   }
   &.enter-right {
      background-color: ${theme.colorTransparentOverlay};
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
   background-color: ${theme.colorSecondaryTransparent};
   transition: 1000ms all ease-in-out;
   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
   h1 {
      color: white;
      font-size: ${theme.fontSizeXL};
      white-space: nowrap;
   }
   p {
      color: white;
      white-space: nowrap;
      font-size: ${theme.fontSizeM};
      font-weight: 200;
      letter-spacing: 5px;
      padding: 3rem 0 6rem 0;
   }
   &.enter-right {
      background-color: ${theme.colorSecondaryTransparent};
   }
   &.enter-left {
      background-color: ${theme.colorTransparentOverlay};
   }
`;
