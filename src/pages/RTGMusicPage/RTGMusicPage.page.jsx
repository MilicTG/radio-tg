import React, { Component } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

//styles
import '../../styles/styles.css';

//Components
import Header from '../../components/headerBig/headerBig.component';
import BtnDownload from '../../components/buttonTransparent/btnTransparent.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import InfoSectionLeft from '../../components/sectionInfo/sectionInfoLeft.component';
import Footer from '../../components/footer/footer.component';

//helpers
import { getMusicHeaderBackground } from '../../helpers/getHeaderBackground';

//data
import {
   musicPageInfoNonStop as nonStop,
   musicPageInfoParty as hits,
   musicPageInfoCaffeBar as caffe,
} from '../../data/infoSectionsData';
import imgAntena from '../../assets/img-musicPage-antena.jpg';
import imgParty from '../../assets/img-musicPage-party.jpg';
import imgCaffeBar from '../../assets/img-musicPage-caffebar.jpg';
import plsFile from '../../assets/RTG-Music.pls';

export default class RTGMusicPage extends Component {
   constructor() {
      super();

      this.state = {
         titleMain: 'RTG ',
         titleSecond: 'Music',
         titleFreq: 'Vaš najbolji internet radio',
         headerBackground: '',
         url: 'http://163.172.213.155:8197/stream',
      };
   }

   componentDidMount() {
      this.setHeaderBackground();
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

   setHeaderBackground = () => {
      let background = getMusicHeaderBackground();
      this.setState({
         headerBackground: background,
      });
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
                  className='player'
                  loop={false}
                  preload='none'
                  volume
                  src={this.state.url}
                  showJumpControls={false}
                  layout='horizontal-reverse'
                  customControlsSection={[
                     RHAP_UI.MAIN_CONTROLS,
                     <div>RTG Music </div>,
                  ]}
                  customAdditionalControls={[]}
                  customProgressBarSection={[RHAP_UI.VOLUME_CONTROLS]}
                  style={{
                     width: '330px',
                     height: '60px',
                     border: 'none',
                     borderRadius: '50px',
                     padding: '1rem 1.5rem ',
                     fontSize: '1.8rem',
                     marginTop: '15rem',
                     background: '#fff',
                  }}
               />
               <BtnDownload file={plsFile} />
            </Header>

            <Footer />
         </>
      );
   }
}
