import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//styles
import {
   cardWrapper as Wrapper,
   cardIcon as Icon,
   cardText as Text,
} from './contactCard.style';

const contactCard = props => {
   return (
      <Wrapper>
         <Icon>
            <FontAwesomeIcon icon={props.icon} size='3x' />
         </Icon>
         <Text>{props.children}</Text>
      </Wrapper>
   );
};

export default contactCard;
