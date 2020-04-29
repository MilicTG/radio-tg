import React from 'react';
import { Phone } from '@styled-icons/entypo/Phone';
import { Fax } from '@styled-icons/fa-solid/Fax';
import { Email } from '@styled-icons/material-outlined/Email';
import { MapMarkerAlt } from '@styled-icons/fa-solid/MapMarkerAlt';

//styles
import {
   cardWrapper as Wrapper,
   cardIcon as Icon,
   cardText as Text,
} from './contactCard.style';

const renderSwitch = (iconStyle) => {
   switch (iconStyle) {
      case 'Phone':
         return <Phone size='48' />;
      case 'Fax':
         return <Fax size='48' />;
      case 'Email':
         return <Email size='48' />;
      case 'Map':
         return <MapMarkerAlt size='48' />;
   }
};

const contactCard = (props) => {
   return (
      <Wrapper>
         <Icon>{renderSwitch(props.iconStyle)}</Icon>
         <Text>{props.children}</Text>
      </Wrapper>
   );
};

export default contactCard;
