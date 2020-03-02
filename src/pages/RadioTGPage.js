import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../components/header/Header';
import SectionTitle from '../components/shared/SectionTitle';
import CardSection from '../components/card/CardSection';
import CardUI from '../components/card/CardUI';
import AboutUs from '../components/about/AboutUs';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar';

import showData from '../data/showData';

export default class IndexPage extends Component {
   render() {
      return (
         <>
            <NavBar />
            <Header />
            <SectionTitle
               title='Nase najslusanije emisije'
               desc='Pronadjite ono sto se vama najvise svidja'
            />
            <CardSection>
               {showData.map(data => (
                  <Fade bottom>
                     <CardUI
                        id={data.id}
                        title={data.showName}
                        img={data.showPic}
                        desc={data.showDesc}
                        time={data.showTime}
                     />
                  </Fade>
               ))}
            </CardSection>
            <AboutUs />
            <Footer />
         </>
      );
   }
}
