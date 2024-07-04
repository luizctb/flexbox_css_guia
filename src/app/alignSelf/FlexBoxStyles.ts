"use client";

import styled from "styled-components";

// componente filho

// order: -1; para colocar em primeiro na ordem tem que colocar -1 pois começa com 0.
export const Container = styled.div`
  display: flex; 
  gap: 10px;
  background-color: #898989;    
  height: 800px;
  div {    
    border: 1px solid black;      
    background-color: #65a30d;    
    width: 200px; 
    height: 200px;
  }  
  #id-3 {
    order: 2;
    background-color: #fda4af;
  }  

  #id-9 {
    order: -1;
    background-color: #fda4af;
  }  
`;


// align-self: center; alinha apenas um componente especifico/ basicamente utiliza o mesmo que no align-components
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;    
//   height: 800px;
//   div {    
//     border: 1px solid black;      
//     background-color: #65a30d;    
//     width: 200px; 
//     height: 200px;
//   }  
//   #id-3 {
//     align-self: center;
//     background-color: #fda4af;
//   }  
// `;


// align-self: flex-end;
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;    
//   height: 800px;
//   div {    
//     border: 1px solid black;      
//     background-color: #65a30d;    
//     width: 200px; 
//     height: 200px;
//   }  
//   #id-3 {
//     align-self: flex-end;
//     background-color: #fda4af;
//   }  
// `;


// order: 2; todos tem ordem 1 e o 003 tem ordem 2
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;    
//   height: 800px;
//   div {    
//     border: 1px solid black;      
//     background-color: #65a30d;    
//     width: 200px; 
//     height: 200px;
//   }  
//   #id-3 {
//     order: 2;
//     background-color: #fda4af;
//   }  
// `;


// order: 2; todos tem ordem 0 o item 009 tem order 1 e o 003 tem ordem 2
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;    
//   height: 800px;
//   div {    
//     border: 1px solid black;      
//     background-color: #65a30d;    
//     width: 200px; 
//     height: 200px;
//   }  
//   #id-3 {
//     order: 2;
//     background-color: #fda4af;
//   }  

//   #id-9 {
//     order: 1;
//     background-color: #fda4af;
//   }  
// `;

