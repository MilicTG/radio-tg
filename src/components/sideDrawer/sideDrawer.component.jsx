import React from 'react';
import { Link } from 'react-router-dom';

//style
import { sideDrawerContainer as Container } from './sideDrawer.style';

const sideDrawer = props => {
   return (
      <Container className={props.drawer ? 'open' : 'close'}>
         <ul>
            <li>
               <Link onClick={props.onClick} to='/program'>
                  Program
               </Link>
            </li>
            <li>
               <Link onClick={props.onClick} to='/marketing'>
                  Marketing
               </Link>
            </li>
            <li>
               <Link onClick={props.onClick} to='/kontakt'>
                  Kontakt
               </Link>
            </li>
         </ul>
      </Container>
   );
};

export default sideDrawer;
