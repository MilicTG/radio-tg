import React from 'react';
import { Play } from '@styled-icons/fa-solid/Play';
import { Playlist } from '@styled-icons/boxicons-solid/Playlist';
import { Android } from '@styled-icons/fa-brands/Android';
import { Windows } from '@styled-icons/boxicons-logos/Windows';

//styles
import {
   playerWrapper as Wrapper,
   playerButton as PlayerBtn,
   isPlayingText as Text,
} from './audioPlayer.style';

const audioPlayer = (props) => {
   const downloadFile = () => {
      window.location.href = props.file;
   };

   const windowsApp = () => {
      alert('Windows aplikacija u izrai');
   };

   const androidApp = () => {
      alert('Android aplikacija u izradi');
   };

   return (
      <Wrapper>
         <PlayerBtn>
            <Play size='32' text='Radio Tomislavgrad' />
         </PlayerBtn>
         <Text>{props.text}</Text>
         <PlayerBtn onClick={downloadFile}>
            <Playlist />
         </PlayerBtn>
         <PlayerBtn onClick={windowsApp}>
            <Windows />
         </PlayerBtn>
         <PlayerBtn onClick={androidApp}>
            <Android />
         </PlayerBtn>
      </Wrapper>
   );
};

export default audioPlayer;
