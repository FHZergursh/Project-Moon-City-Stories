import type { characterCreate } from '../types/characterCreate'

type GameProps = {
  characterCreate: characterCreate
  

}

const Game = ({characterCreate} : GameProps) => {
  return (
    <div className='flex flex-col'>
      <div>name is: {characterCreate.name}</div>
      <div>gender is: {characterCreate.gender}</div>
      <div>trait is: {characterCreate.trait}</div>


    </div>
    
  )
}

export default Game