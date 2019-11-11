import styled from "styled-components";
import { device } from "./responsive";

export const Container = styled.div`
  max-width: 1600px;
  height: fit-content;
  margin: 0 auto;
  @media ${device.tablet} {
    max-width: 600px;
  }
  @media ${device.laptop} {
    max-width: 1200px;
  }
  @media ${device.laptopL} {
    max-width: 1500px;
  }
  @media ${device.desktop} {
    max-width: 1600px;
    width: 1600px;
  }
`;
