import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//styles
import { Container } from '../../styles/Container';

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';
import NoticeHolder from '../../components/noticeHolder/noticeHolder.component';
import Footer from '../../components/footer/footer.component';

//data
import headImage from '../../assets/img-notice.jpg';
import obvOne from '../../documents/Dokument1.pdf';
import obvTwo from '../../documents/Dokument2.pdf';
import obvThree from '../../documents/Dokument3.pdf';
import obvFour from '../../documents/Dokument4.pdf';
import natjecaj from '../../documents/Natjecaj.pdf';
import natjecaj2 from '../../documents/Natjecaj2.pdf';

class NoticePage extends Component {
   constructor() {
      super();

      this.state = {
         headTitle: 'Oglasi',
         headDesc: 'Oglasi, natječaji i obavijesti',
         headBackground: headImage,
      };
   }

   render() {
      return (
         <>
            <HeaderSmall
               background={this.state.headBackground}
               title={this.state.headTitle}
               desc={this.state.headDesc}
            />

            <Container>
               <NoticeHolder
                  title='Obavijest iz Stožera civilne zaštite općine Tomislavgrad'
                  file={obvOne}
               />
               <NoticeHolder title='Obavijest o neradnom danu' file={obvTwo} />
               <NoticeHolder
                  title='Obavijest o skraćenom radnom vremenu tijela uprave Općine Tomislavgrad'
                  file={obvThree}
               />
               <NoticeHolder
                  title='Obavijest o zabrani paljenja vatre na otvorenom prostoru'
                  file={obvFour}
               />
               <NoticeHolder
                  title='Javni natječaj za ZAPOSLENIKA 2020'
                  file={natjecaj}
               />
               <NoticeHolder
                  title='Javni natječaj za izbor i imenovanje: Direktora JP ”RADIO TOMISLAVGRAD d.o.o.", Tomislavgrad'
                  file={natjecaj2}
               />
            </Container>
            <Footer />
         </>
      );
   }
}

export default NoticePage;
