"use client";

import styled from "styled-components";

// component pai
export const Container = styled.div`
  display: flex;
  gap: 10px;
  background-color: #898989;
  height: 900px;

  div {
    display: flex;  
    border: 1px solid black;
    padding: 50px;
    text-align: center;  
    background-color: #1b933f;   
    height: 200px;
  }  
`;

// gap = espaçamento entre cada item horizontalmente caso tenha mais itens irá colocar espaços entre todos os itens apenas.

// padding espaço do escrito do item em relação ao espaço lateral

// heigth altura do componente