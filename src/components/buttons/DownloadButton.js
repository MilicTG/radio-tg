import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";

const DownloadButton = () => {
  return (
    <ButtonContainer
      onClick={() => window.open(require("../../assets/listen.pls"), "_none")}
      download
    >
      <p>
        Preuzmite pls
        <FontAwesomeIcon icon={faArrowDown} size="lg" />
      </p>
    </ButtonContainer>
  );
};

export default DownloadButton;

const ButtonContainer = styled.button`
  display: flex;
  width: 11rem;
  height: 4.2rem;
  border-radius: 3rem;
  background: transparent;
  border: solid 1.5px #fff;
  margin: 100px 0 0 20px;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  p {
    color: ${theme.colorWhiteBck};
    width: 100%;
    display: inherit;
    justify-content: space-between;
    font-size: ${theme.fontSizeButtonS};
  }
  @media ${device.deviceTablet} {
    width: 14rem;
    height: 4.8rem;
    padding: 0 20px;
    visibility: visible;
    p {
      font-size: ${theme.fontSizeButtonM};
    }
  }
  @media ${device.deviceDesktop} {
    width: 16rem;
    height: 5.5rem;
    p {
      font-size: ${theme.fontSizeButtonL};
    }
  }
  :hover {
    box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
    cursor: pointer;
    background: ${theme.colorWhiteBck};
    p {
      color: ${theme.colorFont};
    }
  }
  :active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;
