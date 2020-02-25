import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

class PlayButton extends Component {
   constructor() {
      super();
      this.state = {
         play: false,
      };
      this.url = 'http://cast2.name.ba:8038/;';
      this.audio = null;
   }

   componentWillUnmount() {
      this.setState({
         play: false,
      });
      if (this.audio == null) {
         console.log('ne svira');
      } else {
         this.audio.pause();
      }
   }

   togglePlay = () => {
      this.setState({
         play: !this.state.play,
      });
      !this.state.play ? this.startStream() : this.stopStream();
   };

   startStream = () => {
      this.audio = new Audio(this.url);
      this.audio.play();
   };

   stopStream = () => {
      this.audio.pause();
      this.audio = null;
   };

   render() {
      return (
         <>
            <PhoneBtn onClick={this.togglePlay}>
               {!this.state.play ? (
                  <p>
                     <FontAwesomeIcon icon={faPlay} size='lg' />
                  </p>
               ) : (
                  <p>
                     <FontAwesomeIcon icon={faPause} size='lg' />
                  </p>
               )}
            </PhoneBtn>
            <ButtonContainer onClick={this.togglePlay}>
               {!this.state.play ? (
                  <p>
                     Slusajte uzivo <FontAwesomeIcon icon={faPlay} size='lg' />
                  </p>
               ) : (
                  <p>
                     Slusate uzivo <FontAwesomeIcon icon={faPause} size='lg' />
                  </p>
               )}
            </ButtonContainer>
         </>
      );
   }
}

export default PlayButton;

const PhoneBtn = styled.button`
   display: flex;
   height: 4.5rem;
   width: 4.5rem;
   background: #fff;
   border-radius: 3rem;
   border: none;
   margin: 100px 0 0 0;
   padding-left: 15px;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;
   color: ${theme.colorFont};
   p {
      width: 100%;
      display: inherit;
      justify-content: space-between;
   }
   @media ${device.deviceTablet} {
      display: none;
   }
   @media ${device.deviceDesktop} {
      display: none;
   }
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
      cursor: pointer;
      background: ${theme.colorQuartile};
      color: #fff;
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;

const ButtonContainer = styled.button`
   display: none;
   width: 14rem;
   height: 4.2rem;
   background: #fff;
   border-radius: 3rem;
   border: none;
   margin: 100px 0 0 0;
   padding: 0 15px;
   align-items: center;
   transition: all 0.2s ease-in-out;
   color: ${theme.colorFont};
   p {
      width: 100%;
      display: inherit;
      justify-content: space-between;
      font-size: ${theme.fontSizeButtonS};
   }
   @media ${device.deviceTablet} {
      display: flex;
      width: 15rem;
      height: 4.8rem;
      padding: 0 20px;
      p {
         font-size: ${theme.fontSizeButtonM};
      }
   }
   @media ${device.deviceDesktop} {
      display: flex;
      width: 17rem;
      height: 5.5rem;
      p {
         font-size: ${theme.fontSizeButtonL};
      }
   }
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(255, 255, 255, 0.2);
      cursor: pointer;
      background: ${theme.colorQuartile};
      color: #fff;
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
`;
