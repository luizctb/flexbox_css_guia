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
-------------------------------
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
# COMPONENTE PAI (PARENT COMPONENT)

## display: flex;
![flex-direction: column](image.png)

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

----------------------------------
## result: flex direction column

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
## justify-content: space-around;
![justify-content: space-around](image-12.png)

----------------------------------
## justify-content: space-evenly;
![justify-content: space-evenly](image-13.png)


$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## align-items

## justify-content: center / align-items: center;
![justify-content: center _ align-items: center](image-14.png)

----------------------------------
## justify-content: center / align-items: start 
![justify-content: center _ align-items: start](image-15.png)

----------------------------------
## justify-content: center / align-items: end
![justify-content: center _ align-items: end](image-16.png)


$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## gap

## gap: 20px linha; padrão
![gap: 20px; padrão](image-17.png)

----------------------------------
##  gap: 10px linha 40px coluna;
![ gap: 10px 40px](image-18.png)

----------------------------------
## gap: 50px linha 10px coluna;
![gap: 50px 10px](image-19.png)

----------------------------------
## row-gap: 30px;
![row-gap: 30px](image-20.png)

----------------------------------
## column-gap: 30px;
![column-gap: 30px](image-21.png)

----------------------------------

###################################################

# COMPONENTE FILHO (CHILDREN COMPONENT)

* quando estiliza somente o componente filho através de id por exemplo:

<Container>
       <div>item 001</div>
       <div>item 002</div>
       <div id="id-1">item 003</div>
       <div>item 004</div>   
       <div>item 005</div>
       <div>item 006</div>
       <div>item 007</div>
       <div>item 008</div>  
       <div>item 009</div>
       <div>item 0010</div>
       <div>item 0011</div>
       <div>item 0012</div>    
     </Container>

export const Container = styled.div`
  display: flex; 
  gap: 10px;
  background-color: #898989;  
  flex-wrap: wrap;   
  align-items: center; 

  div {    
    border: 1px solid black;      
    background-color: #7e22ce; 
    width: 200px;
    height: 200px;
  }  

  #id-1 {
    flex-grow: 1;
    background-color: #22c55e;
  }
`;
  
## flex-grow: 1 - item 003; vai cobrir todo espaço disponível na sua linha
![flex-grow: 1 - no item 003](image-22.png)

----------------------------------
## flex-grow: 1 - item 003 e 009; vai cobrir todo espaço disponível na sua linha
![flex-grow: 1 - no item 003 e 009](image-23.png)

----------------------------------
## flex-grow: 1 - item 003 e 009; sem width / vai cobrir todo espaço disponível na sua linha sem a width "largura do componente"
![flex-grow: 1 - item 003 e 009 sem width](image-24.png)

----------------------------------
## flex-shrink: 2 - item 003; diminuir a metade dos outros itens proporciaonal.
![flex-shrink: 2 - item 003](image-25.png)

----------------------------------
## flex-basis: 20px; tamanho específico para um componente filho
![flex-basis: 20px](image-26.png)

----------------------------------
## flex: 2 2 30px; reune os 3 tipos: flex-grow, flex-shrink, flex-basis
![flex: 2 2 30px](image-27.png)

----------------------------------
## align-self: center; alinha apenas um componente especifico/ basicamente utiliza o mesmo que no align-components
![align-self: center](image-28.png)

----------------------------------
## align-self: flex-end;
![align-self: flex-end](image-29.png)

----------------------------------
## order: 2; todos tem ordem um e o elemento 003 tem ordem 2 por isso foir pora o final.
![order: 2](image-30.png)

----------------------------------
## order: 2; item 003 e order: 1; item 009 / todos tem ordem 0 o item 009 tem order 1 e o 003 tem order 2
![order: 2; item 003 e order: 1](image-31.png)

----------------------------------
## order: -1; para colocar em primeiro na ordem tem que colocar -1 pois começa com 0.
![order: -1 item 9](image-32.png)
