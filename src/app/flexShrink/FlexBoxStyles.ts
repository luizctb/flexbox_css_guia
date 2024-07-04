"use client";

import styled from "styled-components";

// componente filho

// flex: reune os 3 tipos: flex-grow, flex-shrink, flex-basis
export const Container = styled.div`
  display: flex; 
  gap: 10px;
  background-color: #898989;       
  align-items: center; 
  div {    
    border: 1px solid black;      
    background-color: #7e22ce;    
    width: 200px; 
    height: 200px;
  }  
  #id-3 {
    flex: 2 2 30px;
    background-color: #22d3ee;
  }  
`;


// flex-shrink: 1; item 003 capacida de diminuir
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;       
//   align-items: center; 
//   div {    
//     border: 1px solid black;      
//     background-color: #7e22ce; 
//     width: 200px;
//     height: 200px;
//   }  
//   #id-3 {
//     flex-shrink: 2;
//     background-color: #22d3ee;
//   }  
// `;


// flex-basis: 20px; item 003 tamanho fixo
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;       
//   align-items: center; 
//   div {    
//     border: 1px solid black;      
//     background-color: #7e22ce; 
//     width: 200px;
//     height: 200px;
//   }  
//   #id-3 {
//     flex-basis: 20px;
//     background-color: #22d3ee;
//   }  
// `;