import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { type CharacterCreate, type Character } from '../types/characterCreate'
import type { Message } from '../types/Message'
import MessageList from '../components/MessageList'
import { checkAgeRange } from '../functions/checkAgeRange'
import { generateMessage } from '../functions/messages/generateMessage'

type GameProps = {
  CharacterCreate: CharacterCreate

}


const Game = ({CharacterCreate} : GameProps) => {
  const [character, setCharacter] = useState<Character>({name: CharacterCreate.name, gender: CharacterCreate.gender, 
  attributes: ["Trait should be here", "Second attribute"], age: 0, ageRange: "Baby", faction: "none", rank: "none", uniqueRoute: "none", achievements: ["Born in the City"],
  health: 100, sanity: 100, ahn: 0, combatSkill: 0, technicalSkill: 0, charismaSkill: 0, reputation: 0})

  const [messages, setMessages] = useState<Message[]>([{messageNumber: 1, type: 'ambience', title: "A starting message", content: "lorem ipsum stuff just padding out to test UI"}])
  const [messageCount, setMessageCount] = useState(1) 
  const [timeMonths, setTimeMonths] = useState(0)
  const [startingLocation, setStartingLocation] = useState("H corp") //make this random when you get around to implementing starting position differences
  const [factionCooldown, setFactionCooldown] = useState(0) 
  const [choiceCooldown, setChoiceCooldown] = useState(0)


  function handleClick(e : React.MouseEvent) {
    e.preventDefault()
    advanceTime()
  } 



  function advanceTime() { 
    console.log("Button test successful")

    //age
    const age = ageCharacter()
    let ageRange = character.ageRange
    if (age !== character.age || character.ageRange !== "Bloodfiend")
    {
      ageRange = checkAgeRange(age)
      setCharacter({...character, age: age, ageRange: ageRange })
    }
    else {
      setCharacter({...character, age: age})
    }

    const messageNumber = messageCount + 1
    console.log(messageNumber)
    setMessageCount(messageNumber)

    //cooldowns
    let factionCd = factionCooldown
    let choiceCd = choiceCooldown
    if (factionCooldown !== 0)
    {
      factionCd = factionCd - 1
      setFactionCooldown(factionCd)
    }

    if (choiceCd !== 0)
    {
      choiceCd = choiceCd - 1 
      setChoiceCooldown(choiceCd)
    }

    //new message generation
    console.log("Attempting generation")
    const newMessage : Message = generateMessage({messageCount: messageNumber, ageRange: ageRange, faction: character.faction, rank: character.rank, startingLocation: startingLocation, factionCd: factionCd, choiceCd: choiceCd})

    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
  }

  function ageCharacter() { 

    const rand = Math.floor(Math.random() * 12) + 1
    let newAge = character.age
    let timeEclipsed = rand + timeMonths

    console.log("Current time eclipsed is " + timeEclipsed)

    if (timeEclipsed > 12) { //next year
      console.log("Proceeding to next year")
      timeEclipsed = timeEclipsed - 12
      newAge = character.age + 1

    }
    setTimeMonths(timeEclipsed)

    console.log("ageCharacter is done running, setting month " + (timeEclipsed - 12 + " and new age of " + newAge)) //testing log, remove later in dev
    return newAge
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
      <h1>Age in months is {timeMonths}</h1>
      <h1>Age in years is {character.age}</h1>
    </div>
    
  )
}

export default Game