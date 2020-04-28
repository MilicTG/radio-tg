import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../../styles/styles.css';

//styles
import { cardSectionContainer as CardContainer } from './index.style';
import { Container } from '../../styles/Container';

//components
import Header from '../../components/headerBig/headerBig.component';
import AudioPlayer from '../../components/audioPlayer/audioPlayer.component';
import BtnDownload from '../../components/buttonTransparent/btnTransparent.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import ShowCard from '../../components/showCard/showCard.component';
import SectionInfo from '../../components/sectionInfo/sectionInfoLeftNoContact.component';
import Footer from '../../components/footer/footer.component';

//helpers
import { getRadioHeaderBackground } from '../../helpers/getHeaderBackground';

//data
import { indexPageInfoData } from '../../data/infoSectionsData';
import imgAmp from '../../assets/img-amp.jpg';
import {
   dnevnoZrcalo,
   strunica,
   klubPetmil,
   razgovoriUgodni,
   glazbaonica,
   obiteljskiAlbum,
   slusamDakle,
   radioKnjiznica,
   ostaleEmisije,
} from '../../data/showData';
import plsFile from '../../assets/RadioTG-live.pls';

export default class IndexPage extends Component {
   constructor() {
      super();

      this.state = {
         titleMain: 'Radio ',
         titleSecond: 'Tomislavgrad',
         titleFreq: '95.1,95.9 i 103.3Mhz',
         headerBackground: '',
         url: 'http://163.172.213.155:8038/;',
      };
   }

   componentDidMount() {
      this.setHeaderBackground();
   }

   setHeaderBackground = () => {
      let background = getRadioHeaderBackground();
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
               <AudioPlayer text='Slusajte Uzivo' />
            </Header>
            <SectionTitle
               title='Naše najslušanije emisije'
               desc='Pronađite ono što Vam se najviše sviđa'
            />
            <Container>
               <CardContainer>
                  <Fade bottom delay={300}>
                     <ShowCard
                        route={`/zrcalo`}
                        img={dnevnoZrcalo.showPic}
                        title={dnevnoZrcalo.showName}
                        desc={dnevnoZrcalo.showDesc}
                        time={dnevnoZrcalo.showTime}
                     />
                     <ShowCard
                        route={`/strunica`}
                        img={strunica.showPic}
                        title={strunica.showName}
                        desc={strunica.showDesc}
                        time={strunica.showTime}
                     />
                     <ShowCard
                        img={klubPetmil.showPic}
                        title={klubPetmil.showName}
                        desc={klubPetmil.showDesc}
                        time={klubPetmil.showTime}
                     />
                     <ShowCard
                        img={razgovoriUgodni.showPic}
                        title={razgovoriUgodni.showName}
                        desc={razgovoriUgodni.showDesc}
                        time={razgovoriUgodni.showTime}
                     />
                     <ShowCard
                        img={glazbaonica.showPic}
                        title={glazbaonica.showName}
                        desc={glazbaonica.showDesc}
                        time={glazbaonica.showTime}
                     />
                     <ShowCard
                        img={obiteljskiAlbum.showPic}
                        title={obiteljskiAlbum.showName}
                        desc={obiteljskiAlbum.showDesc}
                        time={obiteljskiAlbum.showTime}
                     />
                     <ShowCard
                        img={slusamDakle.showPic}
                        title={slusamDakle.showName}
                        desc={slusamDakle.showDesc}
                        time={slusamDakle.showTime}
                     />
                     <ShowCard
                        img={radioKnjiznica.showPic}
                        title={radioKnjiznica.showName}
                        desc={radioKnjiznica.showDesc}
                        time={radioKnjiznica.showTime}
                     />
                     <ShowCard
                        img={ostaleEmisije.showPic}
                        title={ostaleEmisije.showName}
                        desc={ostaleEmisije.showDesc}
                        time={ostaleEmisije.showTime}
                     />
                  </Fade>
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
