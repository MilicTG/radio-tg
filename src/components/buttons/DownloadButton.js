import React, { useState } from "react";
import { Spring, animated, config } from "react-spring/renderprops";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/theme";

const DownloadButton = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <Spring
      native
      from={{ scale: 1 }}
      to={{ scale: pressed ? 0.8 : 1 }}
      config={config.gentle}
    >
      {({ scale }) => (
        <ButtonContainer
          style={{ transform: scale.interpolate(scale => `scale(${scale})`) }}
          onMouseDown={() => setPressed(true)}
          onClick={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
        >
          Preuzmite pls
          <FontAwesomeIcon icon={faArrowDown} size="lg" />
        </ButtonContainer>
      )}
    </Spring>
  );
};

export default DownloadButton;

const ButtonContainer = styled(animated.button)`
  display: flex;
  width: 16rem;
  height: 5.5rem;
  background: none;
  border-radius: 3rem;
  font-size: ${theme.button};
  border: solid ${theme.colorWhiteBck} 2px;
  margin: 10rem 0 0 5rem;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: ${theme.colorWhiteBck};
  :hover {
    cursor: pointer;
    background: ${theme.colorWhiteBck};
    color: ${theme.colorFont};
  }
`;
