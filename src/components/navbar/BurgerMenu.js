import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const BurgerMenu = props => {
  return (
    <Wrapper
      onClick={props.handleNavbar}
      className={props.navbarState ? "active" : ""}
    ></Wrapper>
  );
};

export default BurgerMenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: 1rem;
  width: 2.5rem;
  height: 0.3rem;
  cursor: pointer;
  border-top: 0.3rem solid ${theme.colorFont};
  border-bottom: 0.3rem solid ${theme.colorFont};
  transition: all 0.25s ease;
  box-sizing: border-box;
  transform-origin: center;
  &:before,
  &:after {
    content: "";
    background-color: ${theme.colorFont};
    width: 2.5rem;
    height: 0.3rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: center;
    transition: all 0.25s ease;
  }
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    transform: rotate(45deg);
    border-color: transparent;
    &:after {
      transform: translateY(-50%) rotate(-90deg);
    }
  }
`;
