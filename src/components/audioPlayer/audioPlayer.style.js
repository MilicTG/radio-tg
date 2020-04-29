import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const playerWrapper = styled.section`
   display: flex;
   align-items: center;
   height: 7rem;
   border-radius: 10rem;
   background: white;
   margin-top: 10rem;
   padding: 1rem 3rem;
`;

export const playerButton = styled.button`
   z-index: 90;
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   border: none;
   color: ${theme.colorPrimary};
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   margin: 0 1rem;
   :hover {
      color: ${theme.colorSecondary};
   }
   :active {
      color: ${theme.colorSecondary};
   }
   &.tooltips {
      position: relative;
      display: inline;
      transition: all 0.2s ease-in-out;
      outline: none;
      span {
         position: absolute;
         width: 150px;
         color: #ffffff;
         background: #000000;
         line-height: 20px;
         text-align: center;
         visibility: hidden;
         padding: 10px;
         border-radius: 6px;
         font-size: 14px;
         &:after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -8px;
            width: 0;
            height: 0;
            border-top: 8px solid #000000;
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
         }
      }
   }
   &:hover.tooltips {
      span {
         visibility: visible;
         bottom: 40px;
         left: 50%;
         margin-left: -70px;
         z-index: 999;
      }
   }
   &.hide-on-mobile {
      @media ${device.devicePhone} {
         display: none;
      }
   }
`;

export const isPlayingText = styled.p`
   font-size: ${theme.fontSizeFour};
   color: ${theme.colorFont};
   padding: 0 1rem;
   min-width: 15rem;
`;
