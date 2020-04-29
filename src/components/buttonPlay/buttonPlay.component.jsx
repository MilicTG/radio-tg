import React from 'react';
//style
import { buttonContainer as Container } from './buttonPlay.style';

const playButton = (props) => {
   return (
      <Container onClick={props.onClick}>
         {!props.play ? <p>Slušajte uživo</p> : <p>Slušate uživo</p>}
      </Container>
   );
};

export default playButton;
