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
  rank: string,
  uniqueRoute: string, //used for questlines and unique starts that don't fall under the player's faction
  achievements: string[], //displayed on results page

  health: number,
  sanity: number,
  ahn: number, //money
  combatSkill: number,
  technicalSkill: number,
  charismaSkill: number,
  reputation: number, //higher is better



  











}