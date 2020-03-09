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
import ScheduleButton from '../../components/buttonSchedule/buttonSchedule.component';
import Footer from '../../components/footer/footer.component';

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
                     <ScheduleButton text='srijeda' />
                     <ScheduleButton text='cetvrtak' />
                     <ScheduleButton text='petak' />
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
