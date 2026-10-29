export function checkAgeRange(age : number, ) {
  console.log("Running checkAgeRange with value set to: " + age)


  if ( age >= 4 && age < 12)
  {
    return "Child"
  }
  else if (age >= 12 && age < 18)
  {
    return "Teenager"
  }
  else if (age >= 18 && age < 60)
  {
    return "Adult"
  }
  else if (age >= 60)
  {
    return "Old"
  }
  else 
  {
    return "Baby"
  }


}