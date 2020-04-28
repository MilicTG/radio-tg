import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlay,
   faPause,
   faFileAudio,
} from '@fortawesome/free-solid-svg-icons';

//styles
import {
   playerWrapper as Wrapper,
   playerButton as PlayerBtn,
   isPlayingText as Text,
} from './audioPlayer.style';

const audioPlayer = (props) => {
   return (
      <Wrapper>
         <PlayerBtn>
            <FontAwesomeIcon icon={faPlay} size='3x' />
         </PlayerBtn>
         <Text>{props.text}</Text>
         <PlayerBtn>
            <FontAwesomeIcon icon={faFileAudio} size='3x' />
         </PlayerBtn>
         <PlayerBtn>
            <FontAwesomeIcon icon='android' size='3x' />
         </PlayerBtn>
      </Wrapper>
   );
};

export default audioPlayer;
