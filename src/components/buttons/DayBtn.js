import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

const OnlineBtn = props => {
   return (
      <ButtonContainer onClick={props.onClick}>
         {props.children}
      </ButtonContainer>
   );
};

const ButtonContainer = styled.button`
   height: 4rem;
   background-color: ${theme.colorQuartile};
   border: none;
   align-items: center;
   transition: all 0.2s ease-in-out;
   color: ${theme.colorWhiteBck};
   p {
      width: 100%;
      display: inherit;
      justify-content: center;
      font-size: ${theme.fontSizeButtonL};
   }
   @media ${device.deviceTablet} {
      display: flex;
      width: 15rem;
      height: 4.8rem;
      p {
         font-size: ${theme.fontSizeButtonXL};
      }
   }
   @media ${device.deviceDesktop} {
      display: flex;
      width: 12rem;
      height: 4rem;
      p {
         font-size: 1.6rem;
      }
   }
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
      cursor: pointer;
      background: ${theme.colorSecondary};
      color: #fff;
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;

export default OnlineBtn;
