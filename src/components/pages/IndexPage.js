import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import headerImage from "../../assets/Radio-1.jpg";
import strunicaImage from "../../assets/img-strunica.jpg";
import { theme } from "../shared/theme";
import { Container } from "../shared/Container";
import PlayButton from "../shared/PlayButton";
import DownloadMpThreeButton from "../shared/DwnMpButton";
import SectionTitle from "../shared/SectionTitle";
import CardUI from "../shared/CardUI";

const sectionTitleShows = "Nase najslusanije emisije";
const imgDscStrunica = "strunica";
const cardTitleStrunica = "Sarenica strunica tkanica";
const cardTimeStrunica = "sri, ned - 16:00";

export default class IndexPage extends Component {
  render() {
    return (
      <IndexPageSection>
        <HeaderImage>
          <HeaderOverlay>
            <Container>
              <Fade left cascade>
                <HeaderText>
                  <h1 id="radio">Radio </h1> <h1 id="city">Tomislavgrad</h1>
                  <h4>95.1,95.9 i 103.3Mhz</h4>
                </HeaderText>
              </Fade>
              <Fade bottom cascade delay={1000}>
                <ButtonContainer>
                  <PlayButton />
                  <DownloadMpThreeButton />
                </ButtonContainer>
              </Fade>
            </Container>
          </HeaderOverlay>
        </HeaderImage>
        <SectionTitle title={sectionTitleShows} />
        <Container>
          <CardSection>
            <CardUI
              background={strunicaImage}
              description={imgDscStrunica}
              cardTitle={cardTitleStrunica}
              cardTime={cardTimeStrunica}
            />
            <CardUI
              background={strunicaImage}
              description={imgDscStrunica}
              cardTitle={cardTitleStrunica}
              cardTime={cardTimeStrunica}
            />
            <CardUI
              background={strunicaImage}
              description={imgDscStrunica}
              cardTitle={cardTitleStrunica}
              cardTime={cardTimeStrunica}
            />
            <CardUI
              background={strunicaImage}
              description={imgDscStrunica}
              cardTitle={cardTitleStrunica}
              cardTime={cardTimeStrunica}
            />
            <CardUI
              background={strunicaImage}
              description={imgDscStrunica}
              cardTitle={cardTitleStrunica}
              cardTime={cardTimeStrunica}
            />
            <CardUI
              background={strunicaImage}
              description={imgDscStrunica}
              cardTitle={cardTitleStrunica}
              cardTime={cardTimeStrunica}
            />
          </CardSection>
        </Container>
      </IndexPageSection>
    );
  }
}

const IndexPageSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colorLightBck};
`;

const CardSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
`;

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
    rgba(10, 121, 169, 0.3),
    rgba(10, 78, 143, 0.9)
  );
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderText = styled.div`
  color: #fff;
  h1 {
    font-size: ${theme.h1};
    display: inline;
  }
  #radio {
    font-weight: 700;
  }
  #city {
    font-weight: 100;
  }

  h4 {
    font-size: ${theme.h4};
    padding-top: 40px;
    font-weight: 100;
    letter-spacing: 15px;
  }
`;
