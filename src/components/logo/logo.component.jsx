import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo-big.png';

//styles
import { logoWrapper as Wrapper, logoItem as LogoItem } from './logo.style';

const logo = () => {
   return (
      <Wrapper>
         <Link to='/'>
            <LogoItem src={logoImg} alt='Radio logo' />
         </Link>
      </Wrapper>
   );
};

export default logo;
