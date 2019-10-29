import React from "react";
import styled from "styled-components";

const DownloadMpThreeButton = () => {
  return <DownloadButtonContainer>Preuzmite mp3 </DownloadButtonContainer>;
};

const DownloadButtonContainer = styled.button`
  display: flex;
  width: 150px;
  height: 50px;
  color: #fff;
  border: solid #fff 3px;
  border-radius: 30px;
  margin: 100px 0 0 30px;
  justify-content: center;
`;

export default DownloadMpThreeButton;
