import React from 'react';

//components
import NoticeDwn from '../buttonNoticeDownload/buttonNoticeDownload.component';

//style
import {
   noticeWrapper as Wrapper,
   noticeTitle as Title,
   noticeDownload as Download,
} from './noticeHolder.styles';

const noticeHolder = (props) => {
   return (
      <Wrapper>
         <Title>{props.title}</Title>
         <NoticeDwn file={props.file} />
      </Wrapper>
   );
};

export default noticeHolder;
