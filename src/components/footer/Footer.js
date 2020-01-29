import React from "react";
import styled from "styled-components";
import { device } from "../../styles/responsive";
import { theme } from "../../styles/theme";
import { Container } from "../../styles/Container";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <InfoContainer>
          <InfoColumn>
            <table>
              <thead>
                <tr colspan="1">
                  <h3>S Vama i za Vas</h3>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Kroz sve ove godine našega djelovanja uvijek smo nastojali
                    biti u službi našim slušateljima.
                  </td>
                  <td>
                    Tako je i danas. Zato, pronađite naš signal i uvjerite se u
                    kvalitetu i raznolikost programa koji svakodnevno nudimo.
                  </td>
                  <td>Vaš RTG</td>
                </tr>
              </tbody>
            </table>
          </InfoColumn>
          <InfoColumn>
            <table>
              <thead>
                <tr colspan="1">
                  <h3>Adresa</h3>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trg Franje Tudmana,</td>
                  <td>80240, Tomislavgrad,</td>
                  <td>Herceg Bosanska Zupanija,</td>
                  <td>Bosna i Hercegovina</td>
                </tr>
              </tbody>
            </table>
          </InfoColumn>
          <InfoColumn>
            <table>
              <thead>
                <tr colspan="1">
                  <h3>Kontakt info</h3>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>+387 34 353 768</td>
                  <td>+387 34 352 909</td>
                  <td>radiotomislavgrad@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </InfoColumn>
          <InfoColumn>
            <table>
              <thead>
                <tr colspan="1">
                  <h3>Brza navigacija</h3>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pocetna</td>
                  <td>Program</td>
                  <td>Marketing</td>
                  <td>Kontakt</td>
                </tr>
              </tbody>
            </table>
          </InfoColumn>
        </InfoContainer>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${theme.colorTertiary};
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 3rem;
  padding: 4rem 0;
  @media ${device.deviceTablet} {
    justify-self: stretch;
    grid-column-gap: 10rem;
    grid-row-gap: 3rem;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.deviceTabletLand} {
    justify-self: stretch;
    grid-column-gap: 10rem;
    grid-row-gap: 3rem;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.deviceDesktop} {
    grid-column-gap: 7rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-flow: column;
  h3 {
    color: ${theme.colorSecondary};
    font-size: 2rem;
    padding: 1rem 0;
    text-align: start;
  }
  table {
    display: table;
    tr {
      display: table-cell;
      text-align: start;
      td {
        font-size: 1.6rem;
        font-weight: 300;
        padding: 0.7rem 0;
        display: block;
        color: white;
      }
    }
  }
  @media ${device.deviceTablet} {
    h3 {
      font-size: ${theme.fontSizeS};
    }
    table {
      tr {
        text-align: start;
        td {
          font-size: ${theme.fontSizeXS};
        }
      }
    }
  }
  @media ${device.deviceTabletLand} {
    h3 {
      font-size: ${theme.fontSizeS};
    }
    table {
      tr {
        text-align: start;
        td {
          font-size: ${theme.fontSizeXS};
        }
      }
    }
  }
  @media ${device.deviceDesktop} {
    h3 {
      font-size: ${theme.fontSizeS};
    }
    table {
      tr {
        text-align: left;
        td {
          font-size: ${theme.fontSizeXS};
        }
      }
    }
  }
`;

export default Footer;
