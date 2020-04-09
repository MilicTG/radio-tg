import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";

//style
import ButtonContainer from "./btnTransparent.style.js";

const btnTransparent = props => {
  const downloadFile = () => {
    window.location.href = props.file;
  };
  return (
    <ButtonContainer onClick={downloadFile}>
      <FontAwesomeIcon icon={faFileAudio} size="3x" />
    </ButtonContainer>
  );
};

export default btnTransparent;
