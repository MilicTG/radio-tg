import React from "react";
import styled from "styled-components";
import SmallHeader from "../components/header/SmallHeader";
import { Container } from "../styles/Container";
import DayBtn from "../components/buttons/DayBtn";
import programImg from "../assets/img-program.jpg";

import dayInWeak from "../data/dayInWeak";

const title = "Raspored programa";
const desc = "Pregled naseg tjednog programa";

const ProgramPage = () => {
  return (
    <>
      <SmallHeader picture={programImg} title={title} desc={desc}></SmallHeader>
      <Container>
        <ButtonContainer>
          {dayInWeak.map(data => (
            <DayBtn id={data.id}>{data.day}</DayBtn>
          ))}
        </ButtonContainer>
      </Container>
    </>
  );
};

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  padding: 10rem 0;
`;

export default ProgramPage;
