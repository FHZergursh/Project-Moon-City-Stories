export type CharacterCreate = { //The only things required to generate a character
  name: string,
  gender: string, 
  trait: string

}

export type Character = {
  name: string,
  gender: string,
  attributes: string[], //basically, list of passives that confer bonuses. Trait is included here
  age: number,
  ageRange: string,
  faction: string,
  uniqueRoute: string //used for questlines and unique starts that don't fall under the player's faction







}