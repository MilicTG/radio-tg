import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

const buttonContainer = styled.button`
   display: flex;
   width: 20rem;
   height: 6rem;
   background: transparent;
   border: none;
   padding: 0 15px;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;
   color: ${theme.colorFont};
   :hover {
      cursor: pointer;
   }
   @media ${device.devicePhone} {
      font-size: 1.2rem;
      padding: 0 0 2rem 0;
   }
   @media ${device.deviceTablet} {
      font-size: 1.5rem;
      padding: 0 1rem 0.3rem 0;
   }
   @media ${device.deviceTabletLand} {
      font-size: 1.6rem;
      padding: 0 1rem 0.3rem 0;
   }
   @media ${device.deviceDesktop} {
      font-size: 1.6rem;
      padding: 0 1rem 0.3rem 0;
   }
`;

export default buttonContainer;
