import React, { Component } from 'react';

//styles

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import InfoSectionLeft from '../../components/sectionInfo/sectionInfoLeft.component';
import InfoSectionRight from '../../components/sectionInfo/sectionInfoRight.component';
import Footer from '../../components/footer/footer.component';

//data
import imgMarketing from '../../assets/img-marketing.jpg';
import imgBusiness from '../../assets/img-marketing-business.jpg';
import imgWedding from '../../assets/img-marketing-wedding.jpg';
import imgBirthday from '../../assets/img-marketing-birthday.jpg';
import {
   marketingPageInfoBusiness as businessInfo,
   marketingPageInfoBirthday as birthdayInfo,
   marketingPageInfoWedding as weddingInfo,
} from '../../data/infoSectionsData';

class MarketingPage extends Component {
   constructor() {
      super();

      this.state = {
         headTitle: 'Marketing',
         headDesc: 'Uskoro stiže, stranica u izradi',
         headBackground: imgMarketing,
         sectionTitle: 'Zasto se oglasavati na RTG',
         sectionDesc: 'Osigurajte svoje minute u nasem eteru',
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
            {/*  <SectionTitle
               title={this.state.sectionTitle}
               desc={this.state.sectionDesc}
            />
            <InfoSectionLeft
               color={false}
               title={businessInfo.title}
               rowOne={businessInfo.rowOne}
               rowTwo={businessInfo.rowTwo}
               rowThree={businessInfo.rowThree}
               image={imgBusiness}
            />
            <InfoSectionRight
               color={true}
               title={birthdayInfo.title}
               rowOne={birthdayInfo.rowOne}
               rowTwo={birthdayInfo.rowTwo}
               rowThree={birthdayInfo.rowThree}
               image={imgBirthday}
            />
            <InfoSectionLeft
               color={false}
               title={weddingInfo.title}
               rowOne={weddingInfo.rowOne}
               rowTwo={weddingInfo.rowTwo}
               rowThree={weddingInfo.rowThree}
               image={imgWedding}
            />
            <Footer /> */}
         </>
      );
   }
}

export default MarketingPage;
