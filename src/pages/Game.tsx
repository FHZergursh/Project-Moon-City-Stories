import { useState, type SubmitEvent } from 'react'
import Sidebar from '../components/Sidebar'
import { type CharacterCreate, type Character } from '../types/CharacterCreate'
import type { Message } from '../types/Message'
import MessageList from '../components/MessageList'

type GameProps = {
  CharacterCreate: CharacterCreate

}


const Game = ({CharacterCreate} : GameProps) => {
  const [character, setCharacter] = useState<Character>({name: CharacterCreate.name, gender: CharacterCreate.gender, 
  attributes: ["Trait should be here", "Second attribute"], age: 0, ageRange: "Baby", faction: "none", rank: "none", uniqueRoute: "none", achievements: ["Born in the City"],
  health: 100, sanity: 100, ahn: 0, combatSkill: 0, technicalSkill: 0, charismaSkill: 0, reputation: 0})

  const [messages, setMessages] = useState<Message[]>([{type: 'ambience', title: "A starting message", content: "lorem ipsum stuff just padding out to test UI"}])
  const [startingLocation, setStartingLocation] = useState("H corp") //make this random when you get around to implementing starting position differences

  function advanceTime(e: SubmitEvent) {
    e.preventDefault()
    console.log("Button test successful")
  }

  return (
    
    <div className='flex flex-col gap-20'>
      <div>
        <div>
          <Sidebar character={character} />
        </div>

        <div>
          <MessageList messages={messages}/>
        </div>
      </div>

      <form className='flex flex-col gap-2' onSubmit={advanceTime}>
        <div>character generated is {character.name}</div>
        <button >Test message creation</button>
      </form>

    </div>
    
  )
}

export default Game