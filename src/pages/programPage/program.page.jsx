import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//styles
import {
   buttonWrapper as BtnWrapper,
   scheduleWrapper as SchWrap,
} from './program.style';
import { Container } from '../../styles/Container';

//components
import SmallHeader from '../../components/headerSmall/headerSmall.component';
import DaySelect from '../../components/scheduleSelectDay/scheduleSelectDay.component';
import ScheduleButton from '../../components/buttonSchedule/buttonSchedule.component';
import Footer from '../../components/footer/footer.component';

//data
import headImage from '../../assets/img-program.jpg';
import {
   mondayMorning,
   mondayAfternoon,
   tuesdayMorning,
   tuesdayAfternoon,
   wednesdayMorning,
   wednesdayAfternoon,
   thursdayMorning,
   thursdayAfternoon,
   fridayMorning,
   fridayAfternoon,
} from '../../data/programScheduleData';

export default class ProgramPage extends Component {
   constructor() {
      super();
      this.state = {
         morning: mondayMorning,
         afternoon: mondayAfternoon,
         headImage: headImage,
         headTitle: 'Raspored programa',
         headDesc: 'Uskoro stiže, stranica u izradi',
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

   changeToWednesday = () => {
      this.setState({
         morning: wednesdayMorning,
         afternoon: wednesdayAfternoon,
      });
   };

   changeToThursday = () => {
      this.setState({
         morning: thursdayMorning,
         afternoon: thursdayAfternoon,
      });
   };

   changeToFriday = () => {
      this.setState({
         morning: fridayMorning,
         afternoon: fridayAfternoon,
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
               <DaySelect />
               <Fade bottom cascade>
                  <BtnWrapper>
                     <ScheduleButton
                        text='ponedjeljak'
                        onClick={this.changeToMonday}
                     />
                     <ScheduleButton
                        text='utorak'
                        onClick={this.changeToTuesday}
                     />
                     <ScheduleButton
                        text='srijeda'
                        onClick={this.changeToWednesday}
                     />
                     <ScheduleButton
                        text='cetvrtak'
                        onClick={this.changeToThursday}
                     />
                     <ScheduleButton
                        text='petak'
                        onClick={this.changeToFriday}
                     />
                     <ScheduleButton text='subota' />
                     <ScheduleButton text='nedjelja' />
                  </BtnWrapper>
               </Fade>
               <Fade bottom delay={1000} effect='fadeInUp'>
                  <SchWrap>
                     <table>
                        <thead>
                           <tr>Jutarnji program</tr>
                           <tr>Popodnevni program</tr>
                        </thead>
                        <tbody>
                           <tr>
                              {this.state.morning.map(shows => (
                                 <td id={shows.id}>
                                    <p>{shows.time}</p>
                                    <h4>{shows.name}</h4>
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              {this.state.afternoon.map(shows => (
                                 <td id={shows.id}>
                                    <p>{shows.time}</p>
                                    <h4>{shows.name}</h4>
                                 </td>
                              ))}
                           </tr>
                        </tbody>
                     </table>
                  </SchWrap>
               </Fade>
            </Container>
            <Footer />
         </>
      );
   }
}
