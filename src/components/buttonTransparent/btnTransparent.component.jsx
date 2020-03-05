import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

//style
import ButtonContainer from './btnTransparent.style.js';

const btnTransparent = props => {
   return (
      <ButtonContainer>
         <p className='transparent-button-text'>
            {props.text}
            <FontAwesomeIcon icon={faArrowDown} size='lg' />
         </p>
      </ButtonContainer>
   );
};

export default btnTransparent;
