import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

import musicBck from '../../assets/img-RTGBackground.jpg';

export const musicWrapper = styled.div`
   width: 1920px;
   height: 1280px;
   background-image: url(${musicBck});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`;
