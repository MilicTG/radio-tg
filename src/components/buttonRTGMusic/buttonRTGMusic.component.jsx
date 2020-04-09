import React from 'react';
// import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

//style
import ButtonContainer from './buttonRTGMusic.style';

const btnRTGMusic = (props) => {
   return (
      <ButtonContainer onClick={props.onClick}>
         <p className='transparent-button-text'>
            RTG Music
            <FontAwesomeIcon icon={faHeadphones} size='lg' />
         </p>
      </ButtonContainer>

      // <Route
      //    render={({ history }) => (
      //       <ButtonContainer
      //          onClick={() => {
      //             history.push('/rtg-music');
      //          }}
      //       >
      //          <p className='transparent-button-text'>
      //             {props.text}
      //             <FontAwesomeIcon icon={faHeadphones} size='lg' />
      //          </p>
      //       </ButtonContainer>
      //    )}
      // />
   );
};

export default btnRTGMusic;
