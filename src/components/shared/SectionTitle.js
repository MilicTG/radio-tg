import React from "react";
import styled from "styled-components";

import { theme } from "../shared/theme";

const SectionTitle = ({ title }) => <SectionSection>{title}</SectionSection>;

const SectionSection = styled.section`
  margin: 0 auto;
  padding: 85px 0;
  font-size: ${theme.h4};
  font-weight: 700;
  color: ${theme.colorFont};
  text-align: center;
`;

export default SectionTitle;
