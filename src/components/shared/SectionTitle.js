import React from "react";
import styled from "styled-components";

import { device } from "../../styles/responsive";
import { theme } from "../../styles/theme";

const SectionTitle = ({ title }) => {
  return <SectionSection>{title}</SectionSection>;
};

const SectionSection = styled.section`
  margin: 0 auto;

  font-weight: 600;
  color: ${theme.colorFont};
  text-align: center;

  @media ${device.devicePhone} {
    font-size: ${theme.fontSizeXS};
    padding: 3.7rem 0;
  }
  @media ${device.deviceTablet} {
    font-size: ${theme.fontSizeS};
    padding: 4.7rem 0;
  }
  @media ${device.deviceTabletLand} {
    font-size: ${theme.fontSizeM};
    padding: 5rem 0;
  }
  @media ${device.deviceDesktop} {
    font-size: ${theme.fontSizeM};
    padding: 8rem 0;
  }
`;

export default SectionTitle;
