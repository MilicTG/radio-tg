import React, { Component } from "react";
import { theme } from "../shared/theme";
import styled from "styled-components";

export default class CardUI extends Component {
  render() {
    return (
      <CardContainer>
        <CardImage src={this.props.background} alt={this.props.description} />
        <CardTitle>{this.props.cardTitle}</CardTitle>
        <CardShowTime>{this.props.cardTime}</CardShowTime>
      </CardContainer>
    );
  }
}

const CardContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  margin: 50px;
  box-shadow: ${theme.boxShadow};
`;

const CardImage = styled.img`
  width: 100%;
  background-position: left top;
  background-size: cover;
  border-radius: 5px 5px 0 0;
`;

const CardTitle = styled.div`
  font-size: ${theme.card};
  font-weight: 600;
  color: ${theme.colorFont};
  padding: 20px 0 0 10px;
`;

const CardShowTime = styled.div`
  font-size: ${theme.p};
  color: ${theme.colorSecondary};
  padding: 50px 0 0 10px;
`;
