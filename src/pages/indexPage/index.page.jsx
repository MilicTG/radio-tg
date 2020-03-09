import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//styles
import { cardSectionContainer as CardContainer } from './index.style';
import { Container } from '../../styles/Container';

//components
import Header from '../../components/headerBig/headerBig.component';
import PlayButton from '../../components/buttonPlay/buttonPlay.component';
import DownloadBtn from '../../components/buttonTransparent/btnTransparent.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import ShowCard from '../../components/showCard/showCard.component';
import SectionInfo from '../../components/sectionInfo/sectionInfoLeft.component';
import Footer from '../../components/footer/footer.component';

//helpers
import getHeaderBackground from '../../helpers/getHeaderBackground';

//data
import dataForCard from '../../data/showData';
import { indexPageInfoData } from '../../data/infoSectionsData';
import imgAmp from '../../assets/img-amp.jpg';

export default class IndexPage extends Component {
   constructor() {
      super();

      this.state = {
         titleMain: 'Radio',
         titleSecond: 'Tomislavgrad',
         titleFreq: '95.1,95.9 i 103.3Mhz',
         play: false,
         cardData: dataForCard,
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
               title='Naše najslušanije emisije'
               desc='Pronađite ono što Vam se najviše sviđa'
            />
            <Container>
               <CardContainer>
                  {this.state.cardData.map(data => (
                     <Fade bottom key={data.id}>
                        <ShowCard
                           key={data.id}
                           title={data.showName}
                           img={data.showPic}
                           desc={data.showDesc}
                           time={data.showTime}
                        />
                     </Fade>
                  ))}
               </CardContainer>
            </Container>
            <SectionInfo
               color={true}
               title={indexPageInfoData.title}
               rowOne={indexPageInfoData.rowOne}
               rowTwo={indexPageInfoData.rowTwo}
               rowThree={indexPageInfoData.rowThree}
               image={imgAmp}
            />
            <Footer />
         </>
      );
   }
}
