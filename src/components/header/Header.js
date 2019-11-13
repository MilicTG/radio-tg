import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { Container } from "../../styles/Container";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";
import PlayButton from "../buttons/PlayButton";
import DownloadButton from "../buttons/DownloadButton";
import headerImage from "../../assets/Radio-1.jpg";

const Header = () => {
  return (
    <HeaderImage>
      <HeaderOverlay>
        <Container>
          <Fade left cascade>
            <HeaderText>
              <h1 id="radio">Radio </h1> <h1 id="city">Tomislavgrad</h1>
              <h4>95.1,95.9 i 103.3Mhz</h4>
            </HeaderText>
          </Fade>
          <Fade bottom delay="1200">
            <ButtonGroup>
              <PlayButton />
              <DownloadButton />
            </ButtonGroup>
          </Fade>
        </Container>
      </HeaderOverlay>
    </HeaderImage>
  );
};

export default Header;

const HeaderImage = styled.header`
  width: 100%;
  height: 90vh;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
`;

const HeaderOverlay = styled.div`
  background-image: linear-gradient(
    to left,
    rgba(0, 168, 232, 0.5),
    rgba(0, 52, 89, 0.9)
  );
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderText = styled.div`
  color: #fff;
  h1 {
    display: inline;
    font-size: ${theme.h1};
  }
  #radio {
    font-weight: 700;
  }
  #city {
    font-weight: 100;
  }

  h4 {
    padding-top: 40px;
    font-weight: 100;
    font-size: ${theme.h4};
    letter-spacing: 1.3rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-flow: row;
`;
