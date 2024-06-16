
import { useState } from 'react'

import React from "react";
import { RefillStation } from "./RefillStation";
import { Sets } from "./Sets";
import Aboutpage from "./Aboutpage";
import './App.css'
import CardContainer from './ft32_181_components/CardContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <CardContainer/>
    </div>
    <div style={{ display: "flex" }}>
        {/* <Aboutpage /> */}
        {/* <RefillStation /> */}
        <Sets />
      </div>
    </>
  )
}

export default App
