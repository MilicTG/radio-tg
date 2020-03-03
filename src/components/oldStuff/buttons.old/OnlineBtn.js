import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";

const OnlineBtn = () => {
  return (
    <ButtonContainer>
      <p>Online RTG</p>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 14rem;
  height: 4.2rem;
  background: ${theme.colorQuartile};
  border-radius: 3rem;
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
    padding: 0 20px;
    p {
      font-size: ${theme.fontSizeButtonXL};
    }
  }
  @media ${device.deviceDesktop} {
    display: flex;
    width: 15rem;
    height: 5rem;
    p {
      font-size: 2rem;
    }
  }
  :hover {
    box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
    cursor: pointer;
    background: ${theme.colorPrimary};
    color: #fff;
  }
  :active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;

export default OnlineBtn;
