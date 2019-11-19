import React from "react";
import styled from "styled-components";

import { theme } from "../../styles/theme";

const SectionTitle = ({ title }) => {
  return <SectionSection>{title}</SectionSection>;
};

const SectionSection = styled.section`
  margin: 0 auto;
  padding: 2.5rem 0;
  font-size: ${theme.fontSizeHeaderSecondaryL};
  font-weight: 700;
  color: ${theme.colorFont};
  text-align: center;
`;

export default SectionTitle;
