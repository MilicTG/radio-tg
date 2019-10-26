import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavContainer>
        <h1>Navigacija</h1>
      </NavContainer>
    );
  }
}

const NavContainer = styled.nav`
  display: block;
  width: 100%;
  height: 80px;
  background-color: #f2f2f2;
`;
