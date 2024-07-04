"use client";

import Link from 'next/link'
import React from "react";
import { Container } from "./FlexBoxStyles";
import Home from '../page';

const DisplayFlexTutorial: React.FC<{}> =() => {
   return (      
    <>
    <Container>
       <div>item 001</div>
       <div>item 002</div>
       <div>item 003</div>
       <div>item 004</div>
       <div>item 005</div>
       <div>item 006</div>
       <div>item 007</div>
       <div>item 008</div>
       <div>item 009</div>
       <div>item 0010</div>
       <div>item 0011</div>
       <div>item 0012</div>
       <div>item 0013</div>
     </Container>
      <div>
         <Link href="/">Ir para Home</Link>
       </div>
    </>   
   )
};

export default DisplayFlexTutorial;

// container é component father "pai"
// div são components children "filhos" itens