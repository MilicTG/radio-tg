import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../styles/theme';

const SideDrawer = props => {
   let drawerClasses;

   if (props.show) {
      drawerClasses = 'open';
   }

   return (
      <SideDrawerContainer className={drawerClasses}>
         <ul>
            <li>
               <Link to='/program'>Program</Link>
            </li>
            <li>
               <Link to='/marketing'>Marketing</Link>
            </li>
            <li>
               <Link to='/kontakt'>Kontakt</Link>
            </li>
         </ul>
      </SideDrawerContainer>
   );
};

const SideDrawerContainer = styled.nav`
   height: 100%;
   background: white;
   box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
   position: fixed;
   top: 0;
   left: 0;
   width: 70%;
   max-width: 400px;
   z-index: 200;
   transform: translateX(-150%);
   transition: transform 0.3s ease-out;
   &.open {
      transform: translateX(0);
   }
   ul {
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      li {
         margin: 0.5rem 0;
         a {
            text-decoration: none;
            color: ${theme.colorFont};
            font-size: ${theme.fontSizeS};
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
