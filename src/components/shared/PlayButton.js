import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../shared/theme";

import styled from "styled-components";

const PlayButton = () => {
  return (
    <PlayButtonContainer>
      Sviraj Uzivo <FontAwesomeIcon icon={faPlay} size="lg" />
    </PlayButtonContainer>
  );
};

const PlayButtonContainer = styled.button`
  display: flex;
  width: 160px;
  height: 55px;
  background: #fff;
  border-radius: 30px;
  margin: 100px 0 0 0;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: ${theme.colorFont};
  :hover {
    cursor: pointer;
    background: ${theme.colorTertiary};
    transform: scale(1.05);
    color: #fff;
  }
`;

export default PlayButton;
