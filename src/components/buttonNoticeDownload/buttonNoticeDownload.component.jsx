import React from 'react';

//style
import ButtonContainer from './buttonNoticeDownload.styles';

const buttonNoticeDownload = (props) => {
   const downloadFile = () => {
      window.location.href = props.file;
   };
   return (
      <ButtonContainer onClick={downloadFile}>
         Preuzmite dokumet
      </ButtonContainer>
   );
};

export default buttonNoticeDownload;
