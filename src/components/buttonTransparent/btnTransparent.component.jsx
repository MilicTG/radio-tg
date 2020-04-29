import React from 'react';

//style
import ButtonContainer from './btnTransparent.style.js';

const btnTransparent = (props) => {
   const downloadFile = () => {
      window.location.href = props.file;
   };
   return <ButtonContainer onClick={downloadFile}></ButtonContainer>;
};

export default btnTransparent;
