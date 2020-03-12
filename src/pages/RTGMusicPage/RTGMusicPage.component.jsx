import React, { Component } from 'react';

//styles

//Components
import Header from '../../components/headerBig/headerBig.component';
import PlayButton from '../../components/buttonPlay/buttonPlay.component';
import DownloadBtn from '../../components/buttonTransparent/btnTransparent.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import InfoSectionLeft from '../../components/sectionInfo/sectionInfoLeft.component';
import InfoSectionRight from '../../components/sectionInfo/sectionInfoRight.component';
import Footer from '../../components/footer/footer.component';

//helpers
import getHeaderBackground from '../../helpers/getHeaderBackground';

//data
import {
   musicPageInfoNonStop as nonStop,
   musicPageInfoParty as hits,
   musicPageInfoCaffeBar as caffe,
} from '../../data/infoSectionsData';
import imgAntena from '../../assets/img-musicPage-antena.jpg';
import imgParty from '../../assets/img-musicPage-party.jpg';
import imgCaffeBar from '../../assets/img-musicPage-caffebar.jpg';

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
               key='1'
               titleMain={this.state.titleMain}
               titleSecond={this.state.titleSecond}
               titleFreq={this.state.titleFreq}
               background={this.state.headerBackground}
            >
               <PlayButton
                  key='2'
                  onClick={this.togglePlay}
                  play={this.state.play}
               />
               <DownloadBtn key='3' text='Preuzmite pls' />
            </Header>
            <SectionTitle
               title='Radio koji se ne ponavlja'
               desc='Saznajte zasto smo najbolji'
            />
            <InfoSectionLeft
               color={false}
               title={nonStop.title}
               rowOne={nonStop.rowOne}
               rowTwo={nonStop.rowTwo}
               rowThree={nonStop.rowThree}
               image={imgAntena}
            />
            <InfoSectionRight
               color={true}
               title={hits.title}
               rowOne={hits.rowOne}
               rowTwo={hits.rowTwo}
               rowThree={hits.rowThree}
               image={imgParty}
            />
            <InfoSectionLeft
               color={false}
               title={caffe.title}
               rowOne={caffe.rowOne}
               rowTwo={caffe.rowTwo}
               rowThree={caffe.rowThree}
               image={imgCaffeBar}
            />
            <Footer />
         </>
      );
   }
}
