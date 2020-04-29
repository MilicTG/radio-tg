import React from 'react';
import { Route } from 'react-router-dom';
import { Headphone } from '@styled-icons/boxicons-regular/Headphone';

//style
import ButtonContainer from './buttonRTGMusic.style';

const btnRTGMusic = (props) => {
   return (
      <Route
         render={({ history }) => (
            <ButtonContainer
               onClick={() => {
                  history.push('/rtg-music');
               }}
            >
               <p className='transparent-button-text'>
                  {props.text}
                  <Headphone size='28' />
               </p>
            </ButtonContainer>
         )}
      />
   );
};

export default btnRTGMusic;
