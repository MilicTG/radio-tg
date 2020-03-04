import React from 'react';

//styles
import { Container } from '../../styles/Container';
import {
   titleSectionWrapper as Wrapper,
   primaryTitle as Title,
   descTitle as Description,
} from './sectionTitle.style';

const sectionTitle = props => {
   return (
      <Container>
         <Wrapper>
            <Title>{props.title}</Title>
            <Description>{props.desc}</Description>
         </Wrapper>
      </Container>
   );
};

export default sectionTitle;
