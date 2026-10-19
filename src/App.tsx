import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Game from './pages/Game.tsx'
import Results from './pages/Results.tsx'
import { type characterCreate } from './types/characterCreate.ts'

const App = () => {
  const [test, setTest] = useState("")
  const [characterCreate, setCharacterCreate] = useState<characterCreate>({name: "rand", gender: "rand", trait: "rand"}) //miiiiight just fold it into a bigger character class if it makes more sense later

  function setTestFunction() {
    setTest("callback working")
  }

  function setCharacterCreateCallback(name : string, gender : string, trait : string) {
    setCharacterCreate({name, gender, trait})
  }


  return (
    <div> 
      <Routes> 
        <Route path="/" element={<Home setTestFunction={setTestFunction} setCharacterCreateCallback={setCharacterCreateCallback}/>} />
        <Route path="/game" element={<Game propTest={test}/>} />
        <Route path="results" element={<Results />} />
      </Routes>
    
    
    </div>
  )
}

export default App