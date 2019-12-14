import React from "react";
import styled from "styled-components";
import { device } from "../../styles/responsive";
import { Container } from "../../styles/Container";

const CardSection = props => {
  return (
    <Container>
      <CardSectionContainer>{props.children}</CardSectionContainer>
    </Container>
  );
};

const CardSectionContainer = styled.div`
  width: 100%;
  padding: 0 0.3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;

  @media ${device.deviceTablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
  }
  @media ${device.deviceTabletLand} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
  @media ${device.deviceDesktop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2.5rem;
  }
`;

export default CardSection;
