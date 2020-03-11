import React from 'react';
import { Route } from 'react-router-dom';

//styles
import {
   cardContainer as CardContainer,
   cardTitle as Title,
   cardImg as Image,
   cardDesc as Description,
   cardTime as Time,
} from './showCard.style';

const showCard = props => {
   return (
      <Route
         render={({ history }) => (
            <CardContainer
               onClick={() => {
                  history.push(props.route);
               }}
            >
               <Image src={props.img} alt='show image' />
               <Title>{props.title}</Title>
               <Description>{props.desc}</Description>
               <Time>{props.time}</Time>
            </CardContainer>
         )}
      />
   );
};

export default showCard;
