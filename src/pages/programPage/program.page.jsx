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
import Select from 'react-select';

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
   saturdayMorning,
   saturdayAfternoon,
   sundayMorning,
   sundayAfternoon,
} from '../../data/programScheduleData';

const optionsForCustomSelect = [
   { value: 'ponedjeljak', label: 'Ponedjeljak' },
   { value: 'utorak', label: 'Utorak' },
   { value: 'srijeda', label: 'Srijeda' },
   { value: 'četvrtak', label: 'Četvrtak' },
   { value: 'petak', label: 'Petak' },
   { value: 'subota', label: 'Subota' },
   { value: 'nedjelja', label: 'Nedjelja' },
];

const stylesForCustomSelect = {
   option: (provided) => ({
      ...provided,
      borderBottom: '1px solid black',
      color: '#003459',
      fontSize: '1.4rem',
      width: '100%',
      padding: '2rem',
   }),
};

export default class ProgramPage extends Component {
   constructor() {
      super();
      this.state = {
         morning: mondayMorning,
         afternoon: mondayAfternoon,
         headImage: headImage,
         headTitle: 'Raspored programa',
         headDesc: 'Pregled našeg tjednog programa',
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

   changeToSaturday = () => {
      this.setState({
         morning: saturdayMorning,
         afternoon: saturdayAfternoon,
      });
   };

   changeToSunday = () => {
      this.setState({
         morning: sundayMorning,
         afternoon: sundayAfternoon,
      });
   };

   onSelect = (selectedOptions) => {
      switch (selectedOptions.value) {
         case 'ponedjeljak':
            this.changeToMonday();
            break;
         case 'utorak':
            this.changeToTuesday();
            break;
         case 'srijeda':
            this.changeToWednesday();
            break;
         case 'četvrtak':
            this.changeToThursday();
            break;
         case 'petak':
            this.changeToFriday();
            break;
         case 'subote':
            this.changeToSaturday();
            break;
         case 'nedjelja':
            this.changeToSunday();
            break;
      }
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
                  <Select
                     className='custom-select'
                     options={optionsForCustomSelect}
                     styles={stylesForCustomSelect}
                     onChange={this.onSelect}
                  />
                  <BtnWrapper>
                     <ScheduleButton
                        text='Ponedjeljak'
                        onClick={this.changeToMonday}
                     />
                     <ScheduleButton
                        text='Utorak'
                        onClick={this.changeToTuesday}
                     />
                     <ScheduleButton
                        text='Srijeda'
                        onClick={this.changeToWednesday}
                     />
                     <ScheduleButton
                        text='Četvrtak'
                        onClick={this.changeToThursday}
                     />
                     <ScheduleButton
                        text='Petak'
                        onClick={this.changeToFriday}
                     />
                     <ScheduleButton
                        text='Subota'
                        onClick={this.changeToSaturday}
                     />
                     <ScheduleButton
                        text='Nedjelja'
                        onClick={this.changeToSunday}
                     />
                  </BtnWrapper>
               </Fade>
               <Fade bottom delay={1000} effect='fadeInUp'>
                  <SchWrap>
                     <table>
                        <thead>
                           <tr>Jutarnji program</tr>
                        </thead>
                        <tbody>
                           <tr>
                              {this.state.morning.map((shows) => (
                                 <td id={shows.id}>
                                    <p>{shows.time}</p>
                                    <h4>{shows.name}</h4>
                                 </td>
                              ))}
                           </tr>
                        </tbody>
                     </table>
                     <table>
                        <thead>
                           <tr>Popodnevni program</tr>
                        </thead>
                        <tbody>
                           <tr>
                              {this.state.afternoon.map((shows) => (
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
