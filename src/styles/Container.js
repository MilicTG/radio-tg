import styled from "styled-components";
import { device } from "./responsive";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  @media ${device.laptopL} {
    max-width: 1400px;
  }
  @media ${device.desktop} {
    max-width: 1600px;
  }
`;
