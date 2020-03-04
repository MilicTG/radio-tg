import React from 'react';

//styles
import { burgerBtnContainer as Container } from './burgerBtn.style';

const BurgerBtn = props => (
   <Container onClick={props.onClick}>
      <div className={props.navBarState ? 'active-top' : ''} />
      <div className={props.navBarState ? 'active-mid' : ''} />
      <div className={props.navBarState ? 'active-bottom' : ''} />
   </Container>
);

export default BurgerBtn;
