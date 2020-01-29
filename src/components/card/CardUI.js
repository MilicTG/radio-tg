import React from "react";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";
import styled from "styled-components";

const CardUI = props => {
  return (
    <CardContainer>
      <CardImg src={props.img} alt="show image" />
      <CardTitle>{props.title}</CardTitle>
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
  border: 1px solid #ccc;
  border-radius: 5px;
  :hover {
    border: 1px solid #777;
  }
`;
const CardTitle = styled.h2`
  color: ${theme.colorFont};
  font-size: 2rem;
  font-weight: 500;
  padding: 1.5rem 0 0 1.5rem;
  @media ${device.deviceTablet} {
    font-size: 2.5rem;
  }
  @media ${device.deviceTabletLand} {
    font-size: 2.5rem;
  }
  @media ${device.deviceDesktop} {
    font-size: 2.6rem;
  }
`;
const CardImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;
const CardDesc = styled.p`
  color: ${theme.colorFont};
  font-size: 1.8rem;
  height: 15rem;

  padding: 1.5rem;
  font-weight: 300;
  text-align: start;

  @media ${device.deviceTablet} {
    font-size: 2rem;
  }
  @media ${device.deviceTabletLand} {
    font-size: 2rem;
  }
  @media ${device.deviceDesktop} {
    font-size: 2rem;
  }
`;
const CardTime = styled.p`
  color: ${theme.colorSecondary};
  font-size: 1rem;
  padding: 1.5rem 0 0 1.5rem;

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
