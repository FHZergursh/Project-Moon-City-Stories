import React from 'react'
import { useNavigate } from 'react-router-dom'

type HomeProps = {
  setTestFunction: (message: string) => void
}

const Home = ({setTestFunction} : HomeProps) => {


  const nav = useNavigate()

  function handleClick() {
    setTestFunction("nav working")


    nav("/game")

  }


  return (
    <div> 
      <span className='text-red-300'>Tailwind test</span>
      <button onClick={handleClick}>Click to move pages</button>
    </div>
    
  )
}

export default Home