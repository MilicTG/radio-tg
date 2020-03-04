import React, { Component } from 'react';

//components
import Header from '../../components/headerBig/headerBig.component';
import PlayButton from '../../components/buttonPlay/buttonPlay.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';

export default class IndexPage extends Component {
   constructor() {
      super();

      this.state = {
         titleMain: 'Radio',
         titleSecond: 'Tomislavgrad',
         titleFreq: '95.1,95.9 i 103.3Mhz',
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
            <Header
               titleMain={this.state.titleMain}
               titleSecond={this.state.titleSecond}
               titleFreq={this.state.titleFreq}
            >
               <PlayButton onClick={this.togglePlay} play={this.state.play} />
            </Header>
            <SectionTitle
               title='Naše najslušanije emisije'
               desc='Pronađite ono što Vam se najviše sviđa'
            />
         </>
      );
   }
}
