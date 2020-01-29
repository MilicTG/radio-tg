import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../../styles/theme";
import { Container } from "../../styles/Container";
import { device } from "../../styles/responsive";
import ampImg from "../../assets/amp.jpg";

const AboutUs = () => {
  return (
    <AboutSectionContainer>
      <Container>
        <AboutContainer>
          <AboutTextContainer>
            <Fade left delay="600" cascade>
              <AboutTitle>Malo o nama</AboutTitle>
              <AboutText>
                <p className="rowOne">
                  Radio Tomislavgrad osnovan je 18. svibnja 1992. godine, u
                  vrijeme najžešćih ratnih operacija na kupreško – duvanjskoj
                  bojišnici, što znači da je utemeljen radi potrebe informiranja
                  stanovništva u tim kaotičnim ratnim prilikama.
                </p>
                <p className="rowOne">
                  Od početnih nekoliko sati, danas emitiramo 24 sata vlastitoga
                  programa, s tim da su mikrofoni u studiju aktivni od 7 do 20
                  sati, a ostatak dana nudimo dobru glazbu i reprizne sadržaje.
                </p>
                <p className="rowOne">
                  Program emitiramo s tri odašiljača, na frekvencijama: 103.3,
                  95.9 i 95.1 MHZ, odnosno s Tušnice, Rudina i Drvenika.
                  Zahvaljujući internetu imamo određeni broj slušatelja u
                  cijelome svijetu. Uglavnom su to naši ljudi koji žele čuti
                  informacije iz rodnoga kraja.
                </p>
              </AboutText>
            </Fade>
          </AboutTextContainer>
          <Fade right delay="600">
            <AboutImg />
          </Fade>
        </AboutContainer>
      </Container>
    </AboutSectionContainer>
  );
};

const AboutSectionContainer = styled.section`
  width: 100%;
  background-color: ${theme.colorLightBck};
`;

const AboutContainer = styled.div`
  width: 100%;
  display: grid;
  padding: 2.5rem 0 2.5rem 0;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-column-gap: 3rem;

  @media ${device.deviceTablet} {
    padding: 3rem 0 3rem 0;
    grid-template-columns: 1fr;
  }
  @media ${device.deviceTabletLand} {
    padding: 4rem 0 4rem 0;
    grid-template-columns: 1fr;
  }
  @media ${device.deviceDesktop} {
    padding: 5.5rem 0 5.5rem 0;
    grid-template-columns: 1.1fr 1fr;
    grid-column-gap: 5rem;
  }
`;

const AboutTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
`;

const AboutTitle = styled.h3`
  color: ${theme.colorFont};
  text-align: center;
  font-size: ${theme.fontSizeS};
  font-weight: 500;
  padding-bottom: 1.5rem;
  @media ${device.deviceTablet} {
    font-size: ${theme.fontSizeM};
    text-align: center;
  }
  @media ${device.deviceTabletLand} {
    font-size: ${theme.fontSizeM};
    text-align: center;
  }
  @media ${device.deviceDesktop} {
    font-size: ${theme.fontSizeL};
    text-align: start;
  }
`;

const AboutText = styled.article`
  color: ${theme.colorFont};
  text-align: center;
  font-weight: 400;
  font-size: ${theme.fontSizeXS};
  padding-bottom: 2rem;
  .rowOne {
    padding-bottom: 1rem;
  }
  @media ${device.deviceTablet} {
    font-size: ${theme.fontSizeXS};
    text-align: start;
    padding-bottom: 0;
  }
  @media ${device.deviceTabletLand} {
    font-size: ${theme.fontSizeXS};
    text-align: start;
  }
  @media ${device.deviceDesktop} {
    font-size: ${theme.fontSizeXS};
    text-align: start;
  }
`;

const AboutImg = styled.img`
  border-radius: 10px;
  width: 25rem;
  height: 20rem;
  margin: 0 auto;
  background-image: url(${ampImg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  @media ${device.deviceTablet} {
    width: 50rem;
    height: 20rem;
    margin: 0;
  }
  @media ${device.deviceTabletLand} {
    width: 50rem;
    height: 20rem;
    margin: 0;
  }
  @media ${device.deviceDesktop} {
    width: 60rem;
    height: 40rem;
    margin: 0;
  }
`;

export default AboutUs;
