import styled from "styled-components";
import { device } from "./responsive";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${device.deviceDesktop} {
    max-width: 1100px;
  }
  @media ${device.deviceDesktopHD} {
    max-width: 1440px;
  }
`;
