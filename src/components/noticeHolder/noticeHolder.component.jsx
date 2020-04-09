import React from 'react';

//components
import ButtonNoticeDownload from '../buttonNoticeDownload/buttonNoticeDownload.component';

//style
import {
   noticeWrapper as Wrapper,
   noticeTitle as Title,
} from './noticeHolder.styles';

const noticeHolder = (props) => {
   return (
      <Wrapper>
         <Title>Natječaj za primanje tehničara</Title>
         <ButtonNoticeDownload />
      </Wrapper>
   );
};

export default noticeHolder;
