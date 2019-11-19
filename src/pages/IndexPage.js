import React, { Component } from "react";
import Header from "../components/header/Header";
import SectionTitle from "../components/shared/SectionTitle";

export default class IndexPage extends Component {
  render() {
    return (
      <>
        <Header />;
        <SectionTitle title="Nase najslusanije emisije" />
      </>
    );
  }
}
