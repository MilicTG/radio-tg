import React, { Component } from 'react';
import styled from 'styled-components';
import SmallHeader from '../components/header/SmallHeader';
import { Container } from '../styles/Container';
import DayBtn from '../components/buttons/DayBtn';
import programImg from '../assets/img-program.jpg';

import dayInWeak from '../data/dayInWeak';
import { monday, tuesday } from '../data/scheduleData';

const title = 'Raspored programa';
const desc = 'Pregled naseg tjednog programa';

class ProgramPage extends Component {
   constructor() {
      super();

      this.state = {
         day: monday,
      };
   }

   changeSchedule = props => {
      switch (props.data.day) {
         case 0:
            this.setState({
               day: monday,
            });
            break;
         case 1:
            this.setState({
               day: tuesday,
            });
            break;
         default:
            this.setState({
               day: monday,
            });
      }
   };

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
                  {dayInWeak.map(data => (
                     <DayBtn id={data.id}>{data.day}</DayBtn>
                  ))}
               </ButtonContainer>
               <ScheduleContainer>
                  {this.state.day.map(data => (
                     <table>
                        <thead>
                           <tr colspan='1'>
                              <h3>Jutarnji program</h3>
                           </tr>
                        </thead>
                        <tbody>
                           <td id={data.morningProgram.id}></td>
                        </tbody>
                     </table>
                  ))}
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
   justify-content: space-between;
   flex-flow: row;
`;

export default ProgramPage;
