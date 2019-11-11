import React, { Component } from "react";
import Header from "../components/header/Header";
// import Fade from "react-reveal/Fade";
// import styled from "styled-components";
// import headerImage from "../assets/Radio-1.jpeg";
// import strunicaImage from "../assets/img-strunica.jpg";
// import { theme } from "../components/shared/theme";
// import { Container } from "../components/shared/Container";
// import PlayButton from "../components/shared/PlayButton";
// import DownloadMpThreeButton from "../components/shared/DwnMpButton";
// import SectionTitle from "../components/shared/SectionTitle";
// import CardUI from "../components/shared/CardUI";

// const sectionTitleShows = "Nase najslusanije emisije";
// const imgDscStrunica = "strunica";
// const cardTitleStrunica = "Sarenica strunica tkanica";
// const cardTimeStrunica = "sri, ned - 16:00";

export default class IndexPage extends Component {
  render() {
    return <Header></Header>;
  }
}

// export default class IndexPage extends Component {
//   render() {
//     return (
//       <IndexPageSection>
//         <HeaderImage>
//           <HeaderOverlay>
//             <Container>
//               <Fade left cascade>
//                 <HeaderText>
//                   <h1 id='radio'>Radio </h1> <h1 id='city'>Tomislavgrad</h1>
//                   <h4>95.1,95.9 i 103.3Mhz</h4>
//                 </HeaderText>
//               </Fade>
//               <Fade bottom cascade delay={1000}>
//                 <ButtonContainer>
//                   <PlayButton />
//                   <DownloadMpThreeButton />
//                 </ButtonContainer>
//               </Fade>
//             </Container>
//           </HeaderOverlay>
//         </HeaderImage>
//         <SectionTitle title={sectionTitleShows} />
//         <Container>
//           <CardSection>
//             <CardUI
//               background={strunicaImage}
//               description={imgDscStrunica}
//               cardTitle={cardTitleStrunica}
//               cardTime={cardTimeStrunica}
//             />
//             <CardUI
//               background={strunicaImage}
//               description={imgDscStrunica}
//               cardTitle={cardTitleStrunica}
//               cardTime={cardTimeStrunica}
//             />
//             <CardUI
//               background={strunicaImage}
//               description={imgDscStrunica}
//               cardTitle={cardTitleStrunica}
//               cardTime={cardTimeStrunica}
//             />
//             <CardUI
//               background={strunicaImage}
//               description={imgDscStrunica}
//               cardTitle={cardTitleStrunica}
//               cardTime={cardTimeStrunica}
//             />
//             <CardUI
//               background={strunicaImage}
//               description={imgDscStrunica}
//               cardTitle={cardTitleStrunica}
//               cardTime={cardTimeStrunica}
//             />
//             <CardUI
//               background={strunicaImage}
//               description={imgDscStrunica}
//               cardTitle={cardTitleStrunica}
//               cardTime={cardTimeStrunica}
//             />
//           </CardSection>
//         </Container>
//       </IndexPageSection>
//     );
//   }
// }

// const IndexPageSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   background-color: ${theme.colorLightBck};
// `;

// const CardSection = styled.div`
//   display: grid;
//   grid-template-columns: auto auto auto;
//   grid-gap: 30px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
