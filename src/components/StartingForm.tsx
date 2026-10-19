import { useState, type SubmitEvent } from 'react'
import { selectRandomGender } from '../functions/randomGender'
import { generateRandomNameFemale, generateRandomNameMale, generateRandomNameNonBinary } from '../functions/randomName'

type formProps = {
  setCharacterCreateCallback: (name: string, gender: string, trait: string) => void
}

const StartingForm = ({setCharacterCreateCallback} : formProps ) => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [trait, setTrait] = useState("")



  function handleSubmit(e : SubmitEvent) {
    e.preventDefault()

    if (gender === "")
    {
      const randGender = selectRandomGender();
      setGender(randGender)

      if (name === "") //done here because state won't update immedaitely in time
      {
        console.log("current gender is ", )
        if (randGender === "male")
        {
          console.log("running man")
          setName(generateRandomNameMale())
        }
        else if (randGender === "female")
        {
          console.log("running fem")
          setName(generateRandomNameFemale())
        }
        else 
        {
          console.log("running nb")
          setName(generateRandomNameNonBinary())
        }
      }
    }







    if (trait === "")
    {
      setTrait("no trait")
    }


    console.log(name)
    console.log(gender)
    console.log(trait)

    

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
            Male <input type='radio' name='gender' onClick={() => setGender("male")}/>
          </label>
          <label>
            Female <input type='radio' name='gender'  onClick={() => setGender("female")}/>
          </label>
          <label>
            Non binary <input type='radio' name='gender' onClick={() => setGender("non binary")} />
          </label>
        </p>

        <p className='flex flex-col'>Unique trait:
          <label >
            None (currently not supported)
          </label>
        </p>

        <button type='submit' className='bg-blue-600 px-5 py-4 '>Start</button>




      </form>

      <div className='flex flex-col'>
        <div>name: {name}</div>
        <div>trait: {trait}</div>
        <div>gender: {gender}</div>
      </div>



    </div>
  )
}

export default StartingForm