import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

//style
import ButtonContainer from './buttonRTGMusic.style';

const btnRTGMusic = props => {
   return (
      <ButtonContainer>
         <p className='transparent-button-text'>
            {props.text}
            <FontAwesomeIcon icon={faHeadphones} size='lg' />
         </p>
      </ButtonContainer>
   );
};

export default btnRTGMusic;
