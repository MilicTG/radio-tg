import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style
import ButtonContainer from './btnTransparent.style.js';

const btnTransparent = props => {
   return (
      <ButtonContainer>
         <p className='transparent-button-text'>
            {props.text}
            <FontAwesomeIcon icon={props.icon} size={props.size} />
         </p>
      </ButtonContainer>
   );
};

export default btnTransparent;
