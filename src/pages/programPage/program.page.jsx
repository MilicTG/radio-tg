import React, { Component } from 'react';

//styles
import {
   buttonWrapper as BtnWrapper,
   scheduleWrapper as SchWrap,
} from './program.style';
import { Container } from '../../styles/Container';

//components
import SmallHeader from '../../components/headerSmall/headerSmall.component';
import ScheduleButton from '../../components/buttonSchedule/buttonSchedule.component';

//data
import headImage from '../../assets/img-program.jpg';
import mondayMorning from '../../data/mondayMorning';
import mondayAfternoon from '../../data/mondayAfternoon';
import tuesdayMorning from '../../data/tuesdayMorning';
import tuesdayAfternoon from '../../data/tuesdayAfternoon';

export default class ProgramPage extends Component {
   constructor() {
      super();
      this.state = {
         morning: mondayMorning,
         afternoon: mondayAfternoon,
         headImage: headImage,
         headTitle: 'Raspored programa',
         headDesc: 'Nas program kroz tjedan',
      };
   }

   changeToMonday = () => {
      this.setState({
         morning: mondayMorning,
         afternoon: mondayAfternoon,
      });
   };

   changeToTuesday = () => {
      this.setState({
         morning: tuesdayMorning,
         afternoon: tuesdayAfternoon,
      });
   };

   render() {
      return (
         <>
            <SmallHeader
               background={this.state.headImage}
               title={this.state.headTitle}
               desc={this.state.headDesc}
            />
            <Container>
               <BtnWrapper>
                  <ScheduleButton />
               </BtnWrapper>
            </Container>
         </>
      );
   }
}
