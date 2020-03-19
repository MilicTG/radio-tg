import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

export const selectWrapper = styled.ul`
   @media ${device.deviceTablet} {
      display: none;
   }
`;
