import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const playerWrapper = styled.section`
   display: flex;
   align-items: center;
   width: 50rem;
   height: 7rem;
   border-radius: 10rem;
   background: white;
   margin-top: 10rem;
   padding: 1rem 3rem;
`;

export const playerButton = styled.button`
   z-index: 90;
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   border: none;
   color: ${theme.colorPrimary};
`;

export const isPlayingText = styled.p`
   font-size: ${theme.fontSizeFive};
   color: ${theme.colorFont};
   padding: 0 3rem;
`;
