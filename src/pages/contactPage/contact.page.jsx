import React, { Component } from 'react';

//styles
import { contactCardsWrapper as CardWrapper } from './contact.style';

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';
import SectionTitle from '../../components/sectionTitle/sectionTitle.component';
import { Container } from '../../styles/Container';
import ContactCard from '../../components/contactCard/contactCard.component';

//data
import imgContact from '../../assets/img-contact-page.jpg';

class ContactPage extends Component {
   constructor() {
      super();

      this.state = {
         headTitle: 'Kontaktirajte nas',
         headDesc: 'Stojimo vama na usluzi',
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
                  <ContactCard />
                  <ContactCard />
                  <ContactCard />
               </CardWrapper>
            </Container>
         </>
      );
   }
}

export default ContactPage;
