import React from 'react';
import { Play } from '@styled-icons/fa-solid/Play';
import { Stop } from '@styled-icons/fa-solid/Stop';
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
         <PlayerBtn
            tooltip='Slusajte online'
            tooltip-position='top'
            onClick={props.checkStream}
            className='tooltips'
         >
            {!props.isPlaying ? <Play size='32' /> : <Stop size='32' />}
            <span>{props.tooltipPlayText}</span>
         </PlayerBtn>
         <Text>{props.text}</Text>
         <PlayerBtn onClick={downloadFile} className='hide-on-mobile tooltips'>
            <Playlist />
            <span>Preuzmite za slušanje u winampu ili drugom playeru</span>
         </PlayerBtn>
         <PlayerBtn onClick={windowsApp} className='hide-on-mobile tooltips'>
            <Windows />
            <span>Preuzmite aplikaciju za vaše računalo, trentno u izradi</span>
         </PlayerBtn>
         <PlayerBtn onClick={androidApp} className='hide-on-mobile tooltips'>
            <Android />
            <span>
               Preuzmite aplikaciju za vaš mobilni uređaj, trenutno u izradi
            </span>
         </PlayerBtn>
      </Wrapper>
   );
};

export default audioPlayer;
