import React, { Component } from "react";
import Header from "../components/header/Header";
import SectionTitle from "../components/shared/SectionTitle";
import CardSection from "../components/card/CardSection";
import CardUI from "../components/card/CardUI";
import AboutUs from "../components/about/AboutUs";

import showData from "../data/showData";

export default class IndexPage extends Component {
  render() {
    return (
      <>
        <Header />
        <SectionTitle
          title="Nase najslusanije emisije"
          desc="Pronadjite ono sto se vama najvise svidja"
        />
        <CardSection>
          {showData.map(data => (
            <CardUI
              id={data.id}
              title={data.showName}
              img={data.showPic}
              desc={data.showDesc}
              time={data.showTime}
            />
          ))}
        </CardSection>
       
        <AboutUs />
      </>
    );
  }
}
