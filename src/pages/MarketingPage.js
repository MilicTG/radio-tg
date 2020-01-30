import React from "react";
import styled from "styled-components";
import SmallHeader from "../components/header/SmallHeader";
import { Container } from "../styles/Container";

import marketingImg from "../assets/img-marketing.jpg";
const title = "Marketing";
const desc = "Oglasavajte vase usluge i proizvode";

const MarketingPage = () => {
  return (
    <>
      <SmallHeader picture={marketingImg} title={title} desc={desc}>
        <Container></Container>
      </SmallHeader>
    </>
  );
};

export default MarketingPage;
