"use client";

import Link from 'next/link'
import React from "react";
import { Container } from "./FlexBoxStyles";
import Home from '../page';

const JustifyContentTutorial: React.FC<{}> =() => {
   return (      
    <>
    <Container>
       <div>item 001</div>
       <div>item 002</div>
       <div>item 003</div>
       <div>item 004</div>       
     </Container>
      <div>
         <Link href="/">Ir para Home</Link>
       </div>
    </>   
   )
};

export default JustifyContentTutorial;

