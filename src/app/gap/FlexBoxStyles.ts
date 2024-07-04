"use client";

import styled from "styled-components";

// componente pai
// column-gap: 30px;
export const Container = styled.div`
  display: flex;  
  background-color: #898989;  
  flex-wrap: wrap;   
  align-items: center;
  /* row-gap: 30px;   */
  column-gap: 30px;

  div {    
    border: 1px solid black;      
    background-color: #2563eb; 
    width: 200px;
    height: 200px;
  }  
`;

// gap: 20px;
// export const Container = styled.div`
//   display: flex;  
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center;
//   gap: 50px 10px; 


// gap: 10px 40px;
// export const Container = styled.div`
//   display: flex;  
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center;
//   gap: 10px 40px;


// gap: 10px 40px;
// export const Container = styled.div`
//   display: flex;  
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center;
//   gap: 50px 10px;


// row-gap: 30px;
// export const Container = styled.div`
//   display: flex;  
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center;
//   row-gap: 30px;  


// column-gap: 30px;
// export const Container = styled.div`
//   display: flex;  
//   background-color: #898989;  
//   flex-wrap: wrap;   
//   align-items: center;  
//   column-gap: 30px;
