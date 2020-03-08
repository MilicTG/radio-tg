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

const imageArray = [
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

const getHeaderBackground = () => {
   let background = imageArray[Math.floor(Math.random() * imageArray.length)];
   return background;
};

export default getHeaderBackground;
