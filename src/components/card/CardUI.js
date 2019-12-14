import React from "react";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";
import styled from "styled-components";

const CardUI = props => {
  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>
      <CardImg src={props.img} alt="show image" />
      <CardDesc>{props.desc}</CardDesc>
      <CardTime>{props.time}</CardTime>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  padding-bottom: 2.5rem;
  margin: 0 auto;
  cursor: pointer;
`;
const CardTitle = styled.h2`
  color: ${theme.colorFont};
  font-size: 1.9rem;
  font-weight: 500;
  padding-bottom: 1rem;
  @media ${device.deviceTablet} {
    font-size: 2.3rem;
  }
  @media ${device.deviceTabletLand} {
    font-size: 2.3rem;
  }
  @media ${device.deviceDesktop} {
    font-size: 2.5rem;
  }
`;
const CardImg = styled.img`
  width: 100%;
`;
const CardDesc = styled.p`
  color: ${theme.colorFont};
  font-size: 1.2rem;
  padding: 1.5rem 0;
  font-weight: 300;

  @media ${device.deviceTablet} {
    font-size: 1.6rem;
  }
  @media ${device.deviceTabletLand} {
    font-size: 1.6rem;
  }
  @media ${device.deviceDesktop} {
    font-size: 1.8rem;
  }
`;
const CardTime = styled.p`
  color: ${theme.colorSecondary};
  font-size: 1rem;
  @media ${device.deviceTablet} {
    font-size: 1.1rem;
  }
  @media ${device.deviceTabletLand} {
    font-size: 1.1rem;
  }
  @media ${device.deviceDesktop} {
    font-size: 1.3rem;
  }
`;

export default CardUI;
