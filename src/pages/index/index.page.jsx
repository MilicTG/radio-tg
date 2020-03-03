import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//components
import EnterButton from '../../components/buttonTransparent/btnTransparent.component';

//styles
import {
   indexContainer as IndexContainer,
   leftIndexSide as LeftSide,
   leftIndexOverlay as LeftOverlay,
   rightIndexSide as RightSide,
   rightIndexOverlay as RightOverlay,
} from './index.style';

class IndexPage extends Component {
   constructor() {
      super();

      this.state = {
         classMain: '',
      };
   }

   enterLeftSide = () => {
      this.setState({
         classMain: 'enter-left',
      });
   };

   leaveLeftSide = () => {
      this.setState({
         classMain: '',
      });
   };

   enterRightSide = () => {
      this.setState({
         classMain: 'enter-right',
      });
   };

   leaveRightSide = () => {
      this.setState({
         classMain: '',
      });
   };

   render() {
      return (
         <IndexContainer>
            <LeftSide
               onMouseEnter={this.enterLeftSide}
               onMouseLeave={this.leaveLeftSide}
               className={this.state.classMain}
            >
               <LeftOverlay className={this.state.classMain}>
                  <h1>Radio Tomislavgrad</h1>
                  <p>Vaš domaći radio</p>
                  <EnterButton text='Ulaz    ' icon={faArrowRight} size='m' />
               </LeftOverlay>
            </LeftSide>
            <RightSide
               onMouseEnter={this.enterRightSide}
               onMouseLeave={this.leaveRightSide}
               className={this.state.classMain}
            >
               <RightOverlay className={this.state.classMain}>
                  <h1>Duvanjski radio</h1>
                  <p>Najbolji online radio</p>
                  <EnterButton text='Ulaz    ' icon={faArrowRight} size='m' />
               </RightOverlay>
            </RightSide>
         </IndexContainer>
      );
   }
}

export default IndexPage;
