import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/Container";

import { device } from "../../styles/responsive";
import { theme } from "../../styles/theme";

const SectionTitle = ({ title, desc }) => {
  return (
    <Container>
      <SectionSection>
        <PrimaryTitle>{title}</PrimaryTitle>
        <DescTitle>{desc}</DescTitle>
      </SectionSection>
    </Container>
  );
};

const SectionSection = styled.section`
  margin: 0 auto;

  @media ${device.devicePhone} {
    padding: 5rem 0;
  }
  @media ${device.deviceTablet} {
    padding: 8rem 0;
  }
  @media ${device.deviceTabletLand} {
    padding: 8rem 0;
  }
  @media ${device.deviceDesktop} {
    padding: 10rem 0;
  }
`;

const PrimaryTitle = styled.h2`
  font-weight: 500;
  color: ${theme.colorFont};
  text-align: center;
  padding-bottom: 2rem;

  @media ${device.devicePhone} {
    font-size: ${theme.fontSizeXS};
  }
  @media ${device.deviceTablet} {
    font-size: ${theme.fontSizeS};
  }
  @media ${device.deviceTabletLand} {
    font-size: ${theme.fontSizeM};
  }
  @media ${device.deviceDesktop} {
    font-size: ${theme.fontSizeM};
  }
`;

const DescTitle = styled.p`
  font-weight: 200;
  color: ${theme.colorFont};
  text-align: center;
  white-space: pre-line;
  display: inline-block;
  margin: 0 10%;

  @media ${device.devicePhone} {
    font-size: ${theme.fontSizeXXS};
  }
  @media ${device.deviceTablet} {
    font-size: 1.8rem;
  }
  @media ${device.deviceTabletLand} {
    font-size: 1.8rem;
  }
  @media ${device.deviceDesktop} {
    font-size: 2rem;
  }
`;

export default SectionTitle;
