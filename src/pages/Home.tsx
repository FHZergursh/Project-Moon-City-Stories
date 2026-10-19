import React from 'react'
import { useNavigate } from 'react-router-dom'
import StartingForm from '../components/StartingForm'

type HomeProps = {
  setTestFunction: (message: string) => void
  setCharacterCreateCallback: (name: string, gender: string, trait: string) => void
}

const Home = ({setTestFunction, setCharacterCreateCallback} : HomeProps) => {


  const nav = useNavigate()

  function handleClick() {
    setTestFunction("nav working")


    nav("/game")

  }


  return (
    <div> 
      <span className='text-red-300'>Tailwind test</span>
      <button onClick={handleClick}>Click to move pages</button>

      <StartingForm setCharacterCreateCallback = {setCharacterCreateCallback}/>
    </div>
    
  )
}

export default Home