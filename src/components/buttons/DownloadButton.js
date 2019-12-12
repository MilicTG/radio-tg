import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";

const DownloadButton = () => {
  return (
    <ButtonContainer>
      Preuzmite pls
      <FontAwesomeIcon icon={faArrowDown} size="lg" />
    </ButtonContainer>
  );
};

export default DownloadButton;

const ButtonContainer = styled.button`
  display: flex;
  width: 12rem;
  height: 4.5rem;
  border-radius: 3rem;
  font-size: ${theme.fontSizeButtonS};
  background: transparent;
  border: solid 1.5px #fff;
  margin: 100px 0 0 20px;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: ${theme.colorWhiteBck};
  @media ${device.deviceTablet} {
    width: 14rem;
    height: 4.8rem;
    padding: 0 20px;
  }
  @media ${device.deviceDesktop} {
    width: 16rem;
    height: 5.5rem;
    font-size: ${theme.fontSizeButtonL};
  }
  :hover {
    transform: scale(1.05);
    box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
    cursor: pointer;
    background: ${theme.colorWhiteBck};
    color: ${theme.colorFont};
  }
  :active {
    transform: scale(1);
    box-shadow: none;
  }
`;
