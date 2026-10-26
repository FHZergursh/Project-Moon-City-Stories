import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Game from './pages/Game.tsx'
import Results from './pages/Results.tsx'
import { type CharacterCreate } from './types/characterCreate.ts'

const App = () => {
  const [CharacterCreate, setCharacterCreate] = useState<CharacterCreate>({name: "rand", gender: "rand", trait: "rand"}) //miiiiight just fold it into a bigger character class if it makes more sense later

  function setCharacterCreateCallback(name : string, gender : string, trait : string) {
    setCharacterCreate({name, gender, trait})
  }


  return (
    <div> 
      <Routes> 
        <Route path="/" element={<Home setCharacterCreateCallback={setCharacterCreateCallback}/>} />
        <Route path="/game" element={<Game CharacterCreate={CharacterCreate}/>} />
        <Route path="results" element={<Results />} />
      </Routes>
    
    
    </div>
  )
}

export default App