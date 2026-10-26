import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { type CharacterCreate, type Character } from '../types/characterCreate'
import type { Message } from '../types/Message'
import MessageList from '../components/MessageList'

type GameProps = {
  CharacterCreate: CharacterCreate

}


const Game = ({CharacterCreate} : GameProps) => {
  const [character, setCharacter] = useState<Character>({name: CharacterCreate.name, gender: CharacterCreate.gender, 
  attributes: ["Trait should be here", "Second attribute"], age: 0, ageRange: "Baby", faction: "none", rank: "none", uniqueRoute: "none", achievements: ["Born in the City"],
  health: 100, sanity: 100, ahn: 0, combatSkill: 0, technicalSkill: 0, charismaSkill: 0, reputation: 0})

  const [messages, setMessages] = useState<Message[]>([{messageNumber: 1, type: 'ambience', title: "A starting message", content: "lorem ipsum stuff just padding out to test UI"}])
  const [messageCount, setMessageCount] = useState(1) 
  const [timeMonths, setTimeMonths] = useState(0) //probably gonna want more precision that just the Character's age later on, but don't need it right now
  const [startingLocation, setStartingLocation] = useState("H corp") //make this random when you get around to implementing starting position differences

  function handleClick(e : React.MouseEvent) {
    e.preventDefault()
    console.log(e)

    advanceTime()
  } 



  function advanceTime() { //move this to its own file when it makes sense to, for now its better that it remains here
    console.log("Button test successful")

    const messageNumber = messageCount + 1
    console.log(messageNumber)
    setMessageCount(messageNumber)


    //hardcoded for testing purposes
    const type = "ambience"
    const title = "Test submit"
    const content = "Added new message via advanceTime"

    const insert : Message = {messageNumber: messageNumber, type: type, title: title, content: content}
    const newMessages = [...messages, insert]
    setMessages(newMessages)


  }

  return (
    <div className='flex w-full h-full fixed overflow-scroll'>
      <div className='bg-gray-600 p-20 h-full fixed left-0'>Sidebar content:
        <Sidebar character={character}/>
      </div>
      <div className='w-full h-auto flex flex-col items-center'>Main screen:
        <MessageList messages={messages}/>
        <button onClick={(e) => handleClick(e)}>Advance time...</button>
      </div>
    </div>
    
  )
}

export default Game