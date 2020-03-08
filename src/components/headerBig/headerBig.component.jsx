import React from 'react';
import Fade from 'react-reveal/Fade';

//styles
import {
   headerImage as HeroImage,
   headerOverlay as Overlay,
   headerText as TextWrapper,
   buttonWrapper as ButtonWrapper,
} from './headerBig.style';
import { Container } from '../../styles/Container';

const header = props => {
   return (
      <HeroImage colorLight={props.colorOverlay} background={props.background}>
         <Overlay>
            <Container>
               <Fade left cascade>
                  <TextWrapper>
                     <h1 id='radio'>{props.titleMain}</h1>
                     <h1 id='city'>{props.titleSecond}</h1>
                     <h4>{props.titleFreq}</h4>
                  </TextWrapper>
               </Fade>
               <Fade bottom delay={1200}>
                  <ButtonWrapper>{props.children}</ButtonWrapper>
               </Fade>
            </Container>
         </Overlay>
      </HeroImage>
   );
};

export default header;
