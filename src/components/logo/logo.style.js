import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const logoWrapper = styled.div`
   display: flex;
   height: 100%;
   & a {
      align-self: center;
      display: inherit;
      cursor: pointer;
   }
`;
export const logoItem = styled.img`
   @media ${device.devicePhone} {
      height: 3.5rem;
   }
   @media ${device.deviceTablet} {
      height: 4rem;
   }
   @media ${device.deviceTabletLand} {
      height: 4rem;
   }
   @media ${device.deviceDesktop} {
      height: 5rem;
   }
`;
