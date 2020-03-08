import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const smallHeaderContainer = styled.header`
   width: 100%;
   height: 30vh;
   background: url(${props => props.background});
   background-repeat: no-repeat;
   background-position: left top;
   background-size: cover;
`;

export const smallHeaderOverlay = styled.div`
   background-color: rgba(33, 33, 33, 0.7);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

export const smallHeaderTitle = styled.h2`
   color: white;
   font-size: ${theme.fontSizeXXL};
   text-align: center;
   padding-bottom: 3rem;
`;

export const smallHeaderDesc = styled.p`
   color: white;
   font-size: ${theme.fontSizeM};
   font-weight: 300;
   text-align: center;
`;
