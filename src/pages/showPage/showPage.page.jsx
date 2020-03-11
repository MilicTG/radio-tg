import React from 'react';

//components
import HeaderSmall from '../../components/headerSmall/headerSmall.component';

const showPage = props => {
   return (
      <HeaderSmall
         background={props.background}
         title={props.title}
         desc={props.desc}
      />
   );
};

export default showPage;
