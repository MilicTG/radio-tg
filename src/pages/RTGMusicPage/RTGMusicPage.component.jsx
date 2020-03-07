import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//styles

//Components
import Header from '../../components/headerBig/headerBig.component';

//data

export default class RTGMusicPage extends Component {
   constructor() {
      super();

      this.state = {
         titleMain: 'RTG',
         titleSecond: 'Music',
         titleFreq: 'Vas najbolji internet radio',
         play: false,
         colorOverlay: 'dark',
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
            <Header
               titleMain={this.state.titleMain}
               titleSecond={this.state.titleSecond}
               titleFreq={this.state.titleFreq}
               colorOverlay={this.state.colorOverlay}
            />
         </>
      );
   }
}
