import React from "react";
import styled from "styled-components";

const PlayButton = () => {
  return <PlayButtonContainer>Sviraj Uzivo</PlayButtonContainer>;
};

const PlayButtonContainer = styled.button`
  display: flex;
  width: 150px;
  height: 50px;
  background: #fff;
  border-radius: 30px;
  margin: 100px 0 0 0;
  justify-content: center;
`;

export default PlayButton;
