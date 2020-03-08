import React from 'react';
import Fade from 'react-reveal/Fade';

//styles
import { Container } from '../../styles/Container';
import {
   smallHeaderContainer as HeaderContainer,
   smallHeaderOverlay as HeaderOverlay,
   smallHeaderTitle as HeaderTitle,
   smallHeaderDesc as HeaderDesc,
} from './headerSmall.style';

const smallHeader = props => {
   return (
      <HeaderContainer background={props.background}>
         <HeaderOverlay>
            <Container>
               <Fade bottom>
                  <HeaderTitle> {props.title} </HeaderTitle>
               </Fade>
               <Fade bottom delay='500'>
                  <HeaderDesc> {props.desc} </HeaderDesc>
               </Fade>
            </Container>
         </HeaderOverlay>
      </HeaderContainer>
   );
};

export default smallHeader;
