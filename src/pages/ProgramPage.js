import React, { Component } from 'react';
import styled from 'styled-components';
import SmallHeader from '../components/header/SmallHeader';
import { Container } from '../styles/Container';
import DayBtn from '../components/buttons/DayBtn';
import programImg from '../assets/img-program.jpg';

import mondayMorning from '../data/mondayMorning';
import mondayAfternoon from '../data/mondayAfternoon';
import tuesdayMorning from '../data/tuesdayMorning';
import tuesdayAfternoon from '../data/tuesdayAfternoon';

const title = 'Raspored programa';
const desc = 'Pregled naseg tjednog programa';

class ProgramPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         morning: mondayMorning,
         afternoon: mondayAfternoon,
      };

      this.changeToMonday = this.changeToMonday.bind(this);
      this.changeToTuesday = this.changeToTuesday.bind(this);
   }

   // changeSchedule = e => {
   //    switch (e) {
   //       case 'monday':
   //          this.setState({
   //             morning: mondayMorning,
   //             afternoon: mondayAfternoon,
   //          });
   //          break;
   //       case 'tuesday':
   //          this.setState({
   //             morning: tuesdayMorning,
   //             afternoon: tuesdayAfternoon,
   //          });
   //          break;
   //    }
   // };

   changeToMonday() {
      this.setState({
         morning: mondayMorning,
         afternoon: mondayAfternoon,
      });
      console.log('upro');
   }

   changeToTuesday() {
      this.setState({
         morning: tuesdayMorning,
         afternoon: tuesdayAfternoon,
      });
   }

   render() {
      return (
         <>
            <SmallHeader
               picture={programImg}
               title={title}
               desc={desc}
            ></SmallHeader>
            <Container>
               <ButtonContainer>
                  <DayBtn onClick={this.changeToMonday}>Ponedjeljak</DayBtn>
                  <DayBtn onClick={this.changeToTuesday}>Utorak</DayBtn>
                  <DayBtn>Srijeda</DayBtn>
                  <DayBtn>Cetvrtak</DayBtn>
                  <DayBtn>Petak</DayBtn>
                  <DayBtn>Subota</DayBtn>
                  <DayBtn>Nedjelja</DayBtn>
               </ButtonContainer>
               <ScheduleContainer>
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
               </ScheduleContainer>
            </Container>
         </>
      );
   }
}

const ButtonContainer = styled.section`
   display: flex;
   justify-content: space-between;
   flex-flow: row;
   padding: 10rem 0;
`;

const ScheduleContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-flow: row;
   table {
      display: flex;
      flex-flow: column;
      width: 100%;
      justify-content: space-evenly;
      thead {
         display: flex;
         flex-flow: row;
         justify-content: space-evenly;
      }
      tbody {
         display: flex;
         flex-flow: row;
         justify-content: space-evenly;
         tr {
            display: flex;
            flex-flow: column;
            width: 100%;
            td {
               justify-content: start;
               display: inherit;
               flex-flow: row;
               padding: 2rem 0 2rem 0;
               p {
                  padding: 0 2rem 0 0;
               }
            }
         }
      }
   }
`;

export default ProgramPage;
