import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const navbarWrapper = styled.nav`
   position: relative;
   width: 100%;
   height: 6rem;
   top: 0;
   left: 0;
   background: white;
   z-index: 200;
   @media ${device.deviceTabletLand} {
      height: 7rem;
   }
   @media ${device.deviceDesktop} {
      height: 8rem;
   }
`;

export const navbarContainer = styled.div`
   display: flex;
   margin: auto;
   padding: 0 2rem;
   align-content: center;
   align-items: center;
   height: 100%;
   @media ${device.deviceDesktop} {
      max-width: 1100px;
   }
   @media ${device.deviceDesktopHD} {
      max-width: 1440px;
   }
`;

export const spacer = styled.div`
   flex: 1;
`;

export const navigationItems = styled.div`
   display: flex;
   align-items: center;
   @media (max-width: 900px) {
      display: none;
   }
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      border-radius: 4px;
      overflow: hidden;

      li {
         padding-left: 5rem;
         display: flex;
         align-items: center;
      }
      a {
         text-decoration: none;
         color: ${theme.colorFont};
         font-size: ${theme.fontSizeS};
         font-weight: 500;
         transition: all 0.3s ease;
         :hover {
            color: ${theme.colorPrimary};
            transition: all 0.3s ease-out;
         }
         :after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: '';
            display: block;
            height: 2px;
            left: 50%;
            background: ${theme.colorPrimary};
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
            margin-top: 2px;
         }
         :hover:after {
            width: 100%;
            left: 0;
         }
      }
   }
`;
