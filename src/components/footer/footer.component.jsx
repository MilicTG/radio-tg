import React from 'react';
import { Link } from 'react-router-dom';

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
                           <td>Trg dr. Franje Tuđmana,</td>
                           <td>80240, Tomislavgrad,</td>
                           <td>Hercegbosanska županija,</td>
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
                           <td>Marketing: +387 34 353 768</td>
                           <td>Redakcija: +387 34 352 909</td>
                           <td>radiotomislavgrad@gmail.com</td>
                           <td>radio.tomislavgrad@tel.net.ba</td>
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
                           <td>
                              <Link to='/program'>Program</Link>
                           </td>
                           <td>
                              <Link to='/marketing'>Marketing</Link>
                           </td>
                           <td>
                              <Link to='/oglasi'>Oglasi</Link>
                           </td>
                           <td>
                              <Link to='/kontakt'>Kontakt</Link>
                           </td>
                           <td>
                              <Link to='/rtg-music'>RTG Music</Link>
                           </td>
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
