import React, { Component } from 'react';

//styles
import '../../styles/styles.css';

//Components
import Header from '../../components/headerBig/headerBig.component';
import AudioPlayer from '../../components/audioPlayer/audioPlayer.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import InfoSectionLeft from '../../components/sectionInfo/sectionInfoLeft.component';
import Footer from '../../components/footer/footer.component';

//helpers
import { getMusicHeaderBackground } from '../../helpers/getHeaderBackground';

//data
// import {
//    musicPageInfoNonStop as nonStop,
//    musicPageInfoParty as hits,
//    musicPageInfoCaffeBar as caffe,
// } from '../../data/infoSectionsData';
// import imgAntena from '../../assets/img-musicPage-antena.jpg';
// import imgParty from '../../assets/img-musicPage-party.jpg';
// import imgCaffeBar from '../../assets/img-musicPage-caffebar.jpg';
import plsFile from '../../assets/RTG-Music.pls';
import { TreasureMap } from 'styled-icons/remix-fill';

export default class RTGMusicPage extends Component {
   constructor() {
      super();

      this.state = {
         titleMain: 'RTG ',
         titleSecond: 'Music',
         titleFreq: 'Vaš najbolji internet radio',
         headerBackground: '',
         isOnline: false,
         isPlaying: false,
         isPlayingText: 'Slušajte uživo',
         url: 'http://163.172.213.155:8197/stream',
         tooltipPlayText: 'Slušajte RTG Music - najbolji online radio',
      };
   }

   componentDidMount() {
      this.setHeaderBackground();
      window.addEventListener('online', () => {
         this.setState({
            isConnected: true,
            isPlaying: false,
         });
         this.onStableInternetConnection();
      });
      window.addEventListener('offline', () => {
         this.setState({
            isConnected: false,
            isPlaying: false,
         });
         this.onLostConnection();
      });
   }

   componentWillUnmount() {
      this.setState({
         isPlaying: false,
         isPlayingText: 'Slušajte uživo',
      });
      if (this.audio == null) {
         console.log('ne svira');
      } else {
         this.audio.pause();
      }
   }

   setHeaderBackground = () => {
      let background = getMusicHeaderBackground();
      this.setState({
         headerBackground: background,
      });
   };

   checkStream = () => {
      if (!this.state.isPlaying) {
         this.playStream();
      } else {
         this.stopStream();
      }
   };

   onStableInternetConnection = () => {
      console.log('ima konekcije');
      if (this.state.isConnected) {
         this.playStream();
      }
   };

   onLostConnection = () => {
      console.log('nema konekcije');
      this.stopStream();
   };

   playStream = () => {
      this.setState({
         isPlaying: true,
         isPlayingText: 'Slušate uživo',
      });
      this.audio = new Audio(this.state.url);
      this.audio.load();
      this.audio.play();
      console.log('svira');
   };

   stopStream = () => {
      this.setState({
         isPlaying: false,
         isPlayingText: 'Slušajte uživo',
      });
      this.audio.pause();
      this.audio = null;
      console.log('stao');
   };

   render() {
      return (
         <>
            <Header
               key='1'
               titleMain={this.state.titleMain}
               titleSecond={this.state.titleSecond}
               titleFreq={this.state.titleFreq}
               background={this.state.headerBackground}
            >
               <AudioPlayer
                  text={this.state.isPlayingText}
                  file={plsFile}
                  checkStream={this.checkStream}
                  isPlaying={this.state.isPlaying}
                  tooltipPlayText={this.state.tooltipPlayText}
               />
            </Header>

            <Footer />
         </>
      );
   }
}
