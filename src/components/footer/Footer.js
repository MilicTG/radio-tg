import React from "react";
import styled from "styled-components";
import { device } from "../../styles/responsive";
import { theme } from "../../styles/theme";
import { Container } from "../../styles/Container";

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 50rem;
  background-color: ${theme.colorTertiary};
`;

export default Footer;
