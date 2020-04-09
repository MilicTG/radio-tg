import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//styles
import { Container } from '../../styles/Container';

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';
import NoticeHolder from '../../components/noticeHolder/noticeHolder.component';

//data
import headImage from '../../assets/img-notice.jpg';

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
               <NoticeHolder />
            </Container>
         </>
      );
   }
}

export default NoticePage;
