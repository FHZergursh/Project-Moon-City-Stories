import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Game from './pages/Game.tsx'
import Results from './pages/Results.tsx'

const App = () => {
  const [test, setTest] = useState("")

  function setTestFunction() {
    setTest("callback working")
  }


  return (
    <div> 
      <Routes> 
        <Route path="/" element={<Home setTestFunction={setTestFunction}/>} />
        <Route path="/game" element={<Game propTest={test}/>} />
        <Route path="results" element={<Results />} />
      </Routes>
    
    
    </div>
  )
}

export default App