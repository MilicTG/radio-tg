import styled from 'styled-components';

export const buttonWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-flow: row;
   padding: 10rem 0;
`;

export const scheduleWrapper = styled.div`
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
