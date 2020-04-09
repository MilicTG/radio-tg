import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const sideDrawerContainer = styled.nav`
   height: 100%;
   background: white;
   position: fixed;
   top: 6rem;
   left: 0;
   width: 100%;
   z-index: 1000;
   overflow: hidden;
   transition: transform 0.5s ease-out;
   &.open {
      transform: translateX(0);
   }
   &.close {
      transform: translateX(120%);
      @media (min-width: 899px) {
         display: none;
      }
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
            font-size: ${theme.fontSizeBig};
            font-weight: 500;
            transition: all 0.3s ease;
            :hover {
               color: ${theme.colorPrimary};
            }
         }
      }
      @media (min-width: 899px) {
         display: none;
      }
   }
   .rtg-music--wrapper {
      background: ${theme.colorPrimary};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16rem;
      height: 4.7rem;
      border-radius: 5rem;
   }
   .rtg-music--link {
      color: white;
      font-size: ${theme.fontSizeBig};
   }
`;
