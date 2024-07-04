"use client";

import styled from "styled-components";

// componente filho

// flex-grow: 1; item 003 e 009
export const Container = styled.div`
  display: flex; 
  gap: 10px;
  background-color: #898989;  
  flex-wrap: wrap;   
  align-items: center; 

  div {    
    border: 1px solid black;      
    background-color: #7e22ce; 
    /* width: 200px; */
    height: 200px;
  }  

  #id-3 {
    flex-grow: 1;
    background-color: #22c55e;
  }

  #id-9 {
    flex-grow: 1;
    background-color: #22c55e;
  }
`;


// flex-grow: 1; item 003
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center; 

//   div {    
//     border: 1px solid black;      
//     background-color: #7e22ce; 
//     width: 200px;
//     height: 200px;
//   }  

//   #id-1 {
//     flex-grow: 1;
//     background-color: #22c55e;
//   }
// `;


// flex-grow: 1; item 003 e 009
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center; 

//   div {    
//     border: 1px solid black;      
//     background-color: #7e22ce; 
//     width: 200px;
//     height: 200px;
//   }  

//   #id-3 {
//     flex-grow: 1;
//     background-color: #22c55e;
//   }

//   #id-9 {
//     flex-grow: 1;
//     background-color: #22c55e;
//   }
// `;



// flex-grow: 1; item 003 e 009 sem width
// export const Container = styled.div`
//   display: flex; 
//   gap: 10px;
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center; 

//   div {    
//     border: 1px solid black;      
//     background-color: #7e22ce;     
//     height: 200px;
//   }  

//   #id-3 {
//     flex-grow: 1;
//     background-color: #22c55e;
//   }

//   #id-9 {
//     flex-grow: 1;
//     background-color: #22c55e;
//   }
// `;