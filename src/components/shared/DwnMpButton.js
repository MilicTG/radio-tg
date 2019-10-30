import React from "react";
import styled from "styled-components";
import { theme } from "./theme";

const DownloadMpThreeButton = () => {
  return <DownloadButtonContainer>Preuzmite mp3 </DownloadButtonContainer>;
};

const DownloadButtonContainer = styled.button`
  display: flex;
  width: 160px;
  height: 55px;
  color: #fff;
  border: solid #fff 3px;
  border-radius: 30px;
  margin: 100px 0 0 30px;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background: #fff;
    transform: scale(1.05);
    color: ${theme.colorFont};
  }
  :focus {
    transform: scale(1);
  }
`;

export default DownloadMpThreeButton;
