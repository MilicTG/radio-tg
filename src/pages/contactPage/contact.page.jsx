import React, { Component } from 'react';
import {
   faPhone,
   faEnvelopeOpenText,
   faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import Pulse from 'react-reveal/Pulse';

//styles
import { contactCardsWrapper as CardWrapper } from './contact.style';

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import { Container } from '../../styles/Container';
import ContactCard from '../../components/contactCard/contactCard.component';
import Footer from '../../components/footer/footer.component';

//data
import imgContact from '../../assets/img-contact-page.jpg';

class ContactPage extends Component {
   constructor() {
      super();

      this.state = {
         headTitle: 'Kontaktirajte nas',
         headDesc: 'Uskoro stiže, stranica u izradi',
         headBackground: imgContact,
         sectionTitle: 'Kontakt informacije',
         sectionDesc: 'Veselimo se suradnji s vama',
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
             <SectionTitle
               title={this.state.sectionTitle}
               desc={this.state.sectionDesc}
            />
            <Container>
               <CardWrapper>
                  <Pulse delay={300}>
                     <ContactCard icon={faPhone}>
                        <h3>Telefon</h3>
                        <p>+387 34 353 768</p>
                        <p>+387 34 352 909</p>
                     </ContactCard>
                     <ContactCard icon={faEnvelopeOpenText}>
                        <h3>E-Mail</h3>
                        <p>radiotomislavgrad@gmail.com</p>
                        <p>radio.tomislavgrad@tel.net.ba</p>
                     </ContactCard>
                     <ContactCard icon={faMapMarkerAlt}>
                        <h3>Adresa</h3>
                        <p>Trg doktora</p>
                        <p>Franje Tudmana</p>
                     </ContactCard>
                  </Pulse>
               </CardWrapper>
            </Container> 
            <Footer />
           
         </>
      );
   }
}

export default ContactPage;
