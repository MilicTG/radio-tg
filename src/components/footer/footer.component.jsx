import React from 'react';

//styles
import {
   footerContainer as FooterContainer,
   footerInfoContainer as InfoContainer,
   footerInfoColumn as InfoColumn,
} from './footer.style';
import { Container } from '../../styles/Container';

const footer = () => {
   return (
      <FooterContainer>
         <Container>
            <InfoContainer>
               <InfoColumn>
                  <table>
                     <thead>
                        <tr colspan='1'>
                           <h3>S Vama i za Vas</h3>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              Kroz sve ove godine našega djelovanja uvijek smo
                              nastojali biti u službi našim slušateljima.
                           </td>
                           <td>
                              Tako je i danas. Zato, pronađite naš signal i
                              uvjerite se u kvalitetu i raznolikost programa
                              koji svakodnevno nudimo.
                           </td>
                           <td>Vaš RTG</td>
                        </tr>
                     </tbody>
                  </table>
               </InfoColumn>
               <InfoColumn>
                  <table>
                     <thead>
                        <tr colspan='1'>
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
                        <tr colspan='1'>
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
                        <tr colspan='1'>
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

export default footer;
