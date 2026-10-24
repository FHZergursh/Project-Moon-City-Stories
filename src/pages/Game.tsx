import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { type CharacterCreate, type Character } from '../types/CharacterCreate'

type GameProps = {
  CharacterCreate: CharacterCreate
  

}


const Game = ({CharacterCreate} : GameProps) => {
  const [character, setCharacter] = useState<Character>({name: CharacterCreate.name, gender: CharacterCreate.gender, 
  attributes: ["Trait should be here", "Second attribute"], age: 0, ageRange: "Baby", faction: "none", rank: "none", uniqueRoute: "none",
  health: 100, sanity: 100, ahn: 0, combatSkill: 0, technicalSkill: 0, charismaSkill: 0, reputation: 0})


  return (
    
    <div className='flex flex-col gap-20'>
      <div>
        <div>
          <Sidebar character={character} />
        </div>

        <div>main content, right of screen
          
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div>Name is {CharacterCreate.name}</div>
        <div>Gender is {CharacterCreate.gender}</div>
        <div>Trait is {CharacterCreate.trait}</div>

        <div>character generated is {character.name}</div>
      </div>

    </div>
    
  )
}

export default Game