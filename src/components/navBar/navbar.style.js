import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const navbarWrapper = styled.nav`
   position: relative;
   width: 100%;
   height: 8rem;
   top: 0;
   left: 0;
   background: white;
   z-index: 200;
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
   @media (max-width: 768px) {
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
      }
      a {
         text-decoration: none;
         color: ${theme.colorFont};
         font-size: ${theme.fontSizeS};
         font-weight: 500;
         transition: all 0.3s ease;
         :hover {
            color: ${theme.colorPrimary};
         }
      }
   }
`;