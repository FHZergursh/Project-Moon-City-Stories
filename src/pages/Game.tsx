import type { characterCreate } from '../types/characterCreate'

type GameProps = {
  characterCreate: characterCreate
  

}

const Game = ({characterCreate} : GameProps) => {
  return (
    <div className='flex flex-col gap-20'>
      <div>
        <div>
          <div>sidebar, left of screen</div>
        </div>

        <div>main content, right of screen
          <div>text scroll</div>
          <div>section for next and choices</div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div>Name is {characterCreate.name}</div>
        <div>Gender is {characterCreate.gender}</div>
        <div>Trait is {characterCreate.trait}</div>
      </div>

    </div>
    
  )
}

export default Game