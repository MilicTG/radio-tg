import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const buttonContainer = styled.button`
   width: 14rem;
   height: 5.5rem;
   background: ${theme.colorSecondary};
   border: none;
   border-radius: 1rem;
   transition: all 0.2s ease-in-out;
   cursor: pointer;
   :hover {
      box-shadow: 3px 10px 28px -13px rgba(33, 33, 33, 0.2);
      cursor: pointer;
      background: ${theme.colorPrimary};
   }
   :active {
      transform: scale(0.95);
      box-shadow: none;
   }
   :focus {
      background: ${theme.colorPrimary};
   }
`;

export const buttonText = styled.p`
   color: white;
   font-size: ${theme.fontSizeBig};
`;
