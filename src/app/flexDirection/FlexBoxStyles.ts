"use client";

import styled from "styled-components";

// componente pai
//flex direction column
export const Container = styled.div`
  display: flex;
  gap: 10px;
  background-color: #898989;
  height: 900px; 
  flex-flow: column wrap;

  div {
    display: flex;  
    border: 1px solid black;
    padding: 50px;
    text-align: center;  
    background-color: #1b933f;   
    width: 200px;
    height: 200px;
  }  
`;

//flex direction column-reverse

// export const Container = styled.div`
//   display: flex;
//   gap: 10px;
//   background-color: #898989;
//   height: 900px;
//   flex-direction: column-reverse; 


//flex direction column
// export const Container = styled.div`
//   display: flex;
//   gap: 10px;
//   background-color: #898989;
//   height: 900px;
//   flex-direction: column; 


//flex direction row reverse
// export const Container = styled.div`
//   display: flex;
//   gap: 10px;
//   background-color: #898989;
//   height: 900px;
//   flex-direction: row-reverse; 


//flex direction row 
// export const Container = styled.div`
//   display: flex;
//   gap: 10px;
//   background-color: #898989;
//   height: 900px;
//   flex-direction: row; 


//flex-wrap: wrap;
// export const Container = styled.div`
//   display: flex;
//   gap: 10px;
//   background-color: #898989;
//   height: 900px;
//   flex-wrap: wrap;


//flex-wrap: wrap-reverse;
// export const Container = styled.div`
//   display: flex;
//   gap: 10px;
//   background-color: #898989;
//   height: 900px; 
//   flex-wrap: wrap-reverse;


//flex direction column
// export const Container = styled.div`
//   display: flex;
//   gap: 10px;
//   background-color: #898989;
//   height: 900px; 
//   flex-flow: column wrap; //duas mudanças ao mesmo tempo



