import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from '../../styles/Container';

//styles
import {
   infoSectionContainer as SectionContainer,
   textInfoSide as InfoSide,
   infoTextWrapper as TextWrapper,
   infoTextTitle as Title,
   infoText as Text,
   infoImg as Image,
} from './sectionInfo.style';

const infoSection = props => {
   return (
      <SectionContainer color={props.color}>
         <Container>
            <InfoSide>
               <TextWrapper>
                  <Fade left delay='600' cascade>
                     <Title>{props.title}</Title>
                     <Text>
                        <p className='rowOne'>{props.rowOne}</p>
                        <p className='rowTwo'>{props.rowTwo}</p>
                        <p className='rowThree'>{props.rowThree}</p>
                     </Text>
                  </Fade>
               </TextWrapper>
               <Fade right delay='600'>
                  <Image src={props.image} />
               </Fade>
            </InfoSide>
         </Container>
      </SectionContainer>
   );
};

export default infoSection;
