import React from 'react';

//styles
import {
   buttonContainer as Container,
   buttonText as Text,
} from './buttonSchedule.style';

const buttonSchedule = props => {
   return (
      <Container>
         <Text>{props.text}</Text>
      </Container>
   );
};

export default buttonSchedule;
