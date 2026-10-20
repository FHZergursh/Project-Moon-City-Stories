//I'll probably be repeating this code for NPCs so i'm putting it in an export function

export function selectRandomGender() {
  const rand = Math.floor(Math.random() * 100) + 1 //random number between 1 and 100 
  console.log(rand)

  if (rand <= 47) //47% chance
  {
    return "male"

  }
  else if (rand <= 94) //47% chance
  {
    return "female"

  }
  else //6% chance
  {
    return "non-binary"

  }


  

} 