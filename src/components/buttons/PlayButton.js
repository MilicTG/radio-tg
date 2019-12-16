import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";

class PlayButton extends Component {
  constructor() {
    super();
    this.state = {
      play: false
    };
    this.url = "http://163.172.213.155:8038/";
    this.audio = new Audio(this.url);
  }

  componentDidMount() {
    this.audio.addEventListener("ended", () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ play: true })
    );
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  // TODO: - make play
  // <div>
  //       <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
  //     </div>

  render() {
    return (
      <ButtonContainer onClick={this.togglePlay}>
        Sviraj Uzivo <FontAwesomeIcon icon={faPlay} size="lg" />
      </ButtonContainer>
    );
  }
}

export default PlayButton;

const ButtonContainer = styled.button`
  display: flex;
  width: 12rem;
  height: 4.5rem;
  background: #fff;
  border-radius: 3rem;
  font-size: ${theme.fontSizeButtonS};
  border: none;
  margin: 100px 0 0 0;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: ${theme.colorFont};
  @media ${device.deviceTablet} {
    width: 14rem;
    height: 4.8rem;
    padding: 0 20px;
  }
  @media ${device.deviceDesktop} {
    width: 16rem;
    height: 5.5rem;
    font-size: ${theme.fontSizeButtonL};
  }
  :hover {
    transform: scale(1.05);
    box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
    cursor: pointer;
    background: ${theme.colorQuartile};
    color: #fff;
  }
  :active {
    transform: scale(1);
    box-shadow: none;
  }
`;
