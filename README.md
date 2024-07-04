# BASE STUDIES

## Display Flex

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
![result display flex](image.png)

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## flex-direction: column;
export const Container = styled.div`
  display: flex;
  gap: 10px;
  background-color: #898989;
  height: 900px;
  flex-direction: column;

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

* result: flex direction column

![flex Direction Colum](image-1.png)

----------------------------------
## flex-direction: column-reverse;

![flex-direction: column-reverse](image-2.png)

----------------------------------
## flex-direction: row-reverse;

![flex-direction: row-reverse](image-3.png)

----------------------------------
##  flex-direction: row;
![ flex-direction: row](image-4.png)

----------------------------------
## flex-wrap: wrap;
![flex-wrap: wrap;](image-5.png)

----------------------------------
## flex-wrap: wrap-reverse;
![flex-wrap: wrap-reverse](image-6.png)

----------------------------------
## flex-flow: column wrap;
![flex-flow: column wrap](image-7.png)


$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## justify-content o justify-content: flex-start não tem mudanças é o padrão:

## justify-content: flex-start;
![justify-content: flex-start](image-8.png)

----------------------------------
## justify-content: flex-end;
![justify-content: flex-en](image-9.png)

----------------------------------
## justify-content: center;
![justify-content: center](image-10.png)

----------------------------------
## justify-content: space-between;
![justify-content: space-between](image-11.png)

----------------------------------