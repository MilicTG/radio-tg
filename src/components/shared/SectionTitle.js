import React from "react";
import styled from "styled-components";

import { theme } from "../../styles/theme";

const SectionTitle = ({ title }) => {
  return <SectionSection>{title}</SectionSection>;
};

const SectionSection = styled.section`
  margin: 0 auto;
  padding: 2rem 0;
  font-size: ${theme.fontSizeTitleSectionS};
  font-weight: 700;
  color: ${theme.colorFont};
  text-align: center;
`;

export default SectionTitle;
