# BASE STUDIES

## Display: flex

* base código tsx:
"use client";

import React from "react";
import { Container } from "./CardStyles";

const FlexBoxTutorial: React.FC<{}> =() => {
   return (
    <Container>
      <div>item 001</div>
      <div>item 002</div>
      <div>item 003</div>
      <div>item 004</div>
    </Container>    
   )
};

export default FlexBoxTutorial;
----------------------------------
* Styled components:
"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #898989;

  div {
    flex: 1;
    margin: 10px;
    border: 1px solid black;
    padding: 20px;
    text-align: center;  
    background-color: #1b933f;
  }
  
----------------------------------
* result:


