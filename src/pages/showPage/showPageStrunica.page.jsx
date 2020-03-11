import React from 'react';

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';
import TitleSection from '../../components/sectionTitle/sectionTitle.component';
import Footer from '../../components/footer/footer.component';

//data
import imgStrunica from '../../assets/img-strunica.jpg';
import { strunicaPage } from '../../data/showPagesData';

const showPageStrunica = () => {
   return (
      <>
         <HeaderSmall
            background={imgStrunica}
            title={strunicaPage.headTitle}
            desc={strunicaPage.headDesc}
         />
         <TitleSection
            title={strunicaPage.sectionTitle}
            desc={strunicaPage.sectionDesc}
         />
         <Footer />
      </>
   );
};

export default showPageStrunica;
