import React from 'react';

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';
import TitleSection from '../../components/sectionTitle/sectionTitle.component';
import Footer from '../../components/footer/footer.component';

//data
import imgStrunica from '../../assets/img-zrcalo.jpg';
import { zrcaloPage } from '../../data/showPagesData';

const showPageStrunica = () => {
   return (
      <>
         <HeaderSmall
            background={imgStrunica}
            title={zrcaloPage.headTitle}
            desc={zrcaloPage.headDesc}
         />
         <TitleSection
            title={zrcaloPage.sectionTitle}
            desc={zrcaloPage.sectionDesc}
         />
         <Footer />
      </>
   );
};

export default showPageStrunica;
