import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

//style
import { buttonContainer as Container } from './buttonPlay.style';

const playButton = props => {
   return (
      <Container onClick={props.onClick}>
         {!props.play ? (
            <p>
               Slušajte uživo <FontAwesomeIcon icon={faPlay} size='lg' />
            </p>
         ) : (
            <p>
               Slušate uživo <FontAwesomeIcon icon={faPause} size='lg' />
            </p>
         )}
      </Container>
   );
};

export default playButton;
