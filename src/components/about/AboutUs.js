import React from "react";
import styled from "styled-components";
import ContactButton from "../buttons/ContactUsBtn";

import { theme } from "../../styles/theme";
import { Container } from "../../styles/Container";
import { device } from "../../styles/responsive";
import ampImg from "../../assets/amp.jpg";

const AboutUs = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutTextContainer>
          <AboutText>
            Radio Tomislavgrad osnovan je 18. svibnja 1992. godine, u vrijeme
            najžešćih ratnih operacija na kupreško – duvanjskoj bojišnici, što
            znači da je utemeljen radi potrebe informiranja stanovništva u tim
            kaotičnim ratnim prilikama. Od početnih nekoliko sati, danas
            emitiramo 24 sata vlastitoga programa, s tim da su mikrofoni u
            studiju aktivni od 7 do 20 sati, a ostatak dana nudimo dobru glazbu
            i reprizne sadržaje. Program emitiramo na frekvencijama: 103.3, 95.9
            i 95.1 MHZ.
          </AboutText>
          <ContactButton />
        </AboutTextContainer>
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
  grid-template-columns: 1fr;
  justify-items: end;
  padding-bottom: 20rem;

  @media ${device.deviceTablet} {
    grid-template-columns: 1fr;
  }
  @media ${device.deviceTabletLand} {
    grid-template-columns: 1fr;
  }
  @media ${device.deviceDesktop} {
    grid-template-columns: 1.3fr 1fr;
    grid-column-gap: 10rem;
  }
`;

const AboutTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const AboutText = styled.article`
  color: ${theme.colorFont};
  text-align: left;
  font-size: ${theme.fontSizeS};
  font-weight: 400;
`;

const AboutImgContainer = styled.div`
  width: 55rem;
  height: 55rem;
  background-color: ${theme.colorPrimary};
`;

const AboutImg = styled.img`
  position: relative;
  top: 2.5rem;
  left: -10rem;
  width: 53rem;
  height: 50rem;
  border: none;
  background-image: url(${ampImg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
`;

export default AboutUs;
