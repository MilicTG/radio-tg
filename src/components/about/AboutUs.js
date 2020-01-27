import React from "react";
import styled from "styled-components";
import ContactButton from "../buttons/ContactUsBtn";

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
            <AboutTitle>Malo o nama</AboutTitle>
            <AboutText>
              
                Radio Tomislavgrad osnovan je 18. svibnja 1992. godine, u
                vrijeme najžešćih ratnih operacija na kupreško – duvanjskoj
                bojišnici, što znači da je utemeljen radi potrebe informiranja
                stanovništva u tim kaotičnim ratnim prilikama. Od početnih
                nekoliko sati, danas emitiramo 24 sata vlastitoga programa, s
                tim da su mikrofoni u studiju aktivni od 7 do 20 sati, a ostatak
                dana nudimo dobru glazbu i reprizne sadržaje. Trenutno je na
                RTG-u stalno zaposleno osam ljudi, od čega dvoje radi u tehnici,
                četvero u programu, a ostali dio ekipe je administrativno –
                tehnička potpora. Program emitiramo s tri odašiljača, na
                frekvencijama: 103.3, 95.9 i 95.1 MHZ, odnosno s Tušnice, Rudina
                i Drvenika. Zahvaljujući internetu imamo određeni broj
                slušatelja u cijelome svijetu. Uglavnom su to naši ljudi koji
                žele čuti informacije iz rodnoga kraja, a slušaju nas na adresi
                www.radiotg.com Kroz sve ove godine našega djelovanja uvijek smo
                nastojali biti u službi našim slušateljima. Tako je i danas.
                Zato, pronađite naš signal i uvjerite se u kvalitetu i
                raznolikost programa koji svakodnevno nudimo.
             
            </AboutText>
            <ContactButton />
          </AboutTextContainer>
          <AboutImg />
        </AboutContainer>
      </Container>
    </AboutSectionContainer>
  );
};

const AboutSectionContainer = styled.section`
  width: 100%;
  padding: 5rem;
  background-color: ${theme.colorLightBck};
`;

const AboutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: end;

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

const AboutTitle = styled.h3`
  color: ${theme.colorFont};
  text-align: left;
  font-size: ${theme.fontSizeL};
  font-weight: 500;
`;

const AboutText = styled.article`
  color: ${theme.colorFont};
  text-align: left;
  font-size: ${theme.fontSizeXS};
  font-weight: 400;
`;

const AboutImg = styled.img`
  position: relative;
  border-radius: 10px;
  width: 50rem;
  height: 50rem;
  background-image: url(${ampImg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
`;

export default AboutUs;
