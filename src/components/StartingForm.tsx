import { useState, type SubmitEvent } from 'react'
import { selectRandomGender } from '../functions/randomGender'
import { generateRandomNameFemale, generateRandomNameMale, generateRandomNameNonBinary } from '../functions/randomName'
import { useNavigate } from 'react-router-dom'

type formProps = {
  setCharacterCreateCallback: (name: string, gender: string, trait: string) => void
}

const StartingForm = ({setCharacterCreateCallback} : formProps ) => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [trait, setTrait] = useState("")
  const nav = useNavigate()



  async function handleSubmit(e : SubmitEvent) {
    e.preventDefault()
    let nameVar = name
    let genderVar = gender
    let traitVar = trait

    if (gender === "")
    {
      genderVar = selectRandomGender()
    }

    if (name === "")
    {
      switch (genderVar) {
        case "Male":
          nameVar = generateRandomNameMale()
          break
        case "Female":
          nameVar = generateRandomNameFemale()
          break
        case "Non-binary":
          nameVar = generateRandomNameNonBinary()
          break
        default:
          nameVar = "Something went wrong during namegen."
      }
    }

    if (trait === "")
    {
      traitVar = "none"
    }

    setCharacterCreateCallback(nameVar, genderVar, traitVar)

    nav("/game")
  }



  return (
    <div className='flex justify-center items-center my-10 text-xl'>
      <form className='flex flex-col gap-5 items-start justify-center p-10 bg-zinc-800' onSubmit={handleSubmit}>
        <div >
          <h1>Create your character</h1>
          <p className='text-sm text-gray-400'>(Leave any part blank for random)</p>
        </div>
        <label>
          Name: <input placeholder='...' className='bg-zinc-700' name="nameInput" value={name} onChange={e => setName(e.target.value)} />
        </label>

        <p className='flex flex-col justify-start items-start'>Gender:
          <label>
            Male <input type='radio' name='gender' onClick={() => setGender("Male")}/>
          </label>
          <label>
            Female <input type='radio' name='gender'  onClick={() => setGender("Female")}/>
          </label>
          <label>
            Non binary <input type='radio' name='gender' onClick={() => setGender("Non-binary")} />
          </label>
        </p>

        <p className='flex flex-col'>Unique trait:
          <label >
            None (currently not supported)
          </label>
        </p>

        <button type='submit' className='bg-blue-600 px-5 py-4 '>Start</button>
      </form>
    </div>
  )
}

export default StartingForm