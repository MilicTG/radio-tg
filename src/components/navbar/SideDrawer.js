import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../styles/theme';

const SideDrawer = props => {
   return (
      <SideDrawerContainer className={props.drawer ? 'open' : 'close'}>
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
      </SideDrawerContainer>
   );
};

const SideDrawerContainer = styled.nav`
   height: 100%;
   background: rgba(255, 255, 255, 0.9);
   /* box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5); */
   position: fixed;
   top: 8rem;
   left: 0;
   width: 100%;
   max-width: 400px;
   z-index: 100;
   transition: transform 0.5s ease-out;
   &.open {
      transform: translateX(0);
   }
   &.close {
      transform: translateX(120%);
   }
   ul {
      padding-top: 5rem;
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      li {
         margin: 2rem 0;
         a {
            text-decoration: none;
            color: ${theme.colorFont};
            font-size: ${theme.fontSizeM};
            font-weight: 500;
            transition: all 0.3s ease;
            :hover {
               color: ${theme.colorQuartile};
            }
         }
      }
      @media (min-width: 769px) {
         display: none;
      }
   }
`;

export default SideDrawer;
