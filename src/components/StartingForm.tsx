import React, { useState } from 'react'

type formProps = {
  setCharacterCreateCallback: (name: string, gender: string, trait: string) => void
}

const StartingForm = ({setCharacterCreateCallback} : formProps ) => {
  const [name, setName] = useState("rand")
  const [gender, setGender] = useState("rand")
  const [trait, setTrait] = useState("none")



  function handleSubmit() {
    console.log(name)
    console.log(gender)
    console.log(trait)

  }


  return (
    <div className='flex justify-center items-center my-10 text-xl'>
      <form className='flex flex-col gap-5 items-start justify-center p-10 bg-zinc-800' onSubmit={handleSubmit}>
        <label>
          Name: <input className='bg-zinc-700' name="nameInput" />
        </label>

        <p className='flex flex-col justify-start items-start'>Gender:
          <label>
            Male <input type='radio' name='gender' value="male" />
          </label>
          <label>
            Female <input type='radio' name='gender' value="male" />
          </label>
          <label>
            Non binary <input type='radio' name='gender' value="male" />
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