import React from 'react';
import { Link } from 'react-router-dom';

import logoSVG from '../../assets/RTG Logo.svg';

//styles
import { logoWrapper as Wrapper, logoItem as LogoItem } from './logo.style';

const logo = () => {
   return (
      <Wrapper>
         <Link to='/'>
            <LogoItem src={logoSVG} alt='Radio logo' />
         </Link>
      </Wrapper>
   );
};

export default logo;
