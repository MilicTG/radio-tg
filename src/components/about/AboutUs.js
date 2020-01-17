import React from "react";
import styled from "styled-components";

import { theme } from "../../styles/theme";
import { Container } from "../../styles/Container";
import ampImg from "../../assets/amp.jpg";

const AboutUs = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutText>
          Radio Tomislavgrad osnovan je 18. svibnja 1992. godine, u vrijeme
          najžešćih ratnih operacija na kupreško – duvanjskoj bojišnici, što
          znači da je utemeljen radi potrebe informiranja stanovništva u tim
          kaotičnim ratnim prilikama. Od početnih nekoliko sati, danas emitiramo
          24 sata vlastitoga programa, s tim da su mikrofoni u studiju aktivni
          od 7 do 20 sati, a ostatak dana nudimo dobru glazbu i reprizne
          sadržaje. Program emitiramo na frekvencijama: 103.3, 95.9 i 95.1 MHZ.
        </AboutText>
        <AboutImgContainer>
          <AboutImg />
        </AboutImgContainer>
      </AboutContainer>
    </Container>
  );
};

const AboutContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1.3fr 1.7fr;
  grid-column-gap: 2em;
  justify-items: end;
  padding-bottom: 20rem;
`;

const AboutText = styled.article`
  color: ${theme.colorFont};
  font-size: ${theme.fontSizeXS};
`;

const AboutImgContainer = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: ${theme.colorPrimary};
`;

const AboutImg = styled.img`
  position: relative;
  top: 2.5rem;
  left: -10rem;
  width: 37rem;
  height: 35rem;
  background-image: url(${ampImg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
`;

export default AboutUs;
