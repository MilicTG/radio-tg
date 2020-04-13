import imgOne from '../assets/img-head-one.jpg';
import imgTwo from '../assets/img-head-two.jpg';
import imgThree from '../assets/img-head-three.jpg';
import imgFour from '../assets/img-head-four.jpg';
import imgFive from '../assets/img-head-five.jpg';
import imgSix from '../assets/img-head-six.jpg';
import imgSeven from '../assets/img-head-seven.jpg';
import imgEight from '../assets/img-head-eight.jpg';
import imgNine from '../assets/img-head-nine.jpg';
import imgTen from '../assets/img-head-ten.jpg';
import imgEleven from '../assets/img-head-eleven.jpg';
import imgTwelve from '../assets/img-head-twelve.jpg';

import imgMusicOne from '../assets/img-music-one.jpg';
import imgMusicTwo from '../assets/img-music-two.jpg';
import imgMusicThree from '../assets/img-music-three.jpg';
import imgMusicFour from '../assets/img-music-four.jpg';
import imgMusicFive from '../assets/img-music-five.jpg';
import imgMusicSix from '../assets/img-music-six.jpg';

const radioImageArray = [
   imgOne,
   imgTwo,
   imgThree,
   imgFour,
   imgFive,
   imgSix,
   imgSeven,
   imgEight,
   imgNine,
   imgTen,
   imgEleven,
   imgTwelve,
];

const musicImageArray = [
   imgMusicOne,
   imgMusicTwo,
   imgMusicThree,
   imgMusicFour,
   imgMusicFive,
   imgMusicSix,
];

export const getRadioHeaderBackground = () => {
   let background =
      radioImageArray[Math.floor(Math.random() * radioImageArray.length)];
   return background;
};

export const getMusicHeaderBackground = () => {
   let background =
      musicImageArray[Math.floor(Math.random() * musicImageArray.length)];
   return background;
};
