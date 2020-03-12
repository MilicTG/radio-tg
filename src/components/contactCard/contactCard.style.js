import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const cardWrapper = styled.div`
   width: 30rem;
   height: 50rem;
   transition: all 0.2s ease-in-out;
   border: 1px solid #ccc;
   :hover {
      border: 1.1px solid #777;
   }
`;

export const cardIcon = styled.p`
   font-size: 2rem;
   color: ${theme.colorSecondary};
`;

export const cardText = styled.p`
   font-size: 1.6rem;
   color: ${theme.colorFont};
`;
