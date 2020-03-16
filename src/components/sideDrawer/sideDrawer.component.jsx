import React from 'react';
import { Link } from 'react-router-dom';

//style
import { sideDrawerContainer as Container } from './sideDrawer.style';

//components
import RTGButton from '../buttonRTGMusic/buttonRTGMusic.component';

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
            <li className='rtg-music--wrapper'>
               <Link
                  className='rtg-music--link'
                  onClick={props.onClick}
                  to='/rtg-music'
               >
                  RTG Music
               </Link>
            </li>
         </ul>
      </Container>
   );
};

export default sideDrawer;
