export function checkAgeRange(age : number, ) {

  if ( age < 4)
  {
    return "Child"
  }
  else if (age >= 4 && age < 12)
  {
    return "Teenager"
  }
  else if (age >= 12 && age < 18)
  {
    return "Adult"
  }
  else if (age >= 18 && age < 60)
  {
    return "Old"
  }
  else 
  {
    return "Baby"
  }


}