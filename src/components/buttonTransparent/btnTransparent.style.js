import styled from "styled-components";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";

const buttonContainer = styled.button`
  display: flex;
  width: 6rem;
  height: 6rem;
  background: transparent;
  border-radius: 50rem;
  border: solid 1.5px #fff;
  margin: 100px 0 0 0;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: white;
  margin-top: 15rem;
  margin-left: 5rem;

  @media ${device.devicePhone} {
    display: none;
  }
  :hover {
    box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
    cursor: pointer;
    background: white;
    color: ${theme.colorFont};
  }
  :active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;

export default buttonContainer;
