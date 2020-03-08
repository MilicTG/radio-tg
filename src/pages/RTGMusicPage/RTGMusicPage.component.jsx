import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//styles

//Components
import Header from '../../components/headerBig/headerBig.component';

//helpers
import getHeaderBackground from '../../helpers/getHeaderBackground';

//data

export default class RTGMusicPage extends Component {
   constructor() {
      super();

      this.state = {
         titleMain: 'RTG ',
         titleSecond: 'Music',
         titleFreq: 'Vas najbolji internet radio',
         play: false,
         headerBackground: '',
      };
      this.url = 'http://cast2.name.ba:8038/;';
      this.audio = null;
   }

   componentWillMount() {
      this.setHeaderBackground();
   }

   componentWillUnmount() {
      this.setState({
         play: false,
         headerBackground: this.getHeaderBackground,
      });
      if (this.audio == null) {
         console.log('ne svira');
      } else {
         this.audio.pause();
      }
   }

   setHeaderBackground = () => {
      let background = getHeaderBackground();
      this.setState({
         headerBackground: background,
      });
   };

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
               background={this.state.headerBackground}
            />
         </>
      );
   }
}
