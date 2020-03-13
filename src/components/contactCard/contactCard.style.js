import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { theme } from '../../styles/theme';

export const cardWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-flow: column;
   padding: 3rem 2rem;
   width: 35rem;
   height: 45rem;
   transition: all 0.2s ease-in-out;
   border: 1px solid #ccc;
   border-radius: 10px;
   :hover {
      border: 1.1px solid #777;
   }
`;

export const cardIcon = styled.p`
   font-size: 2rem;
   color: ${theme.colorSecondary};
`;

export const cardText = styled.div`
   padding: 2rem 0;
   font-size: 1.6rem;
   color: ${theme.colorFont};
   text-align: center;
   color: ${theme.colorFont};
   h3 {
      font-size: 2.8rem;
      padding: 3rem 0;
   }
   p {
      font-size: 1.8rem;
      padding: 1rem 0;
   }
`;
