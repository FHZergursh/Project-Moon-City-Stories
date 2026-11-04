export type Choice = {
  description: string,
  aftermath: string,
  result: Result //rewards and punishments, stat changes, ect....

}

export type Result = {
  positive: boolean, //false for negative result, obviously
  combatSkillChange?: number,
  technicalSkillChange?: number,
  charismaSkillChange?: number,
  addAttribute?: string,
  removeAttribute?: string


}

export type Message = {
  messageNumber: number, //starts at 1, increments
  type: "ambience" | "choice" | "faction-membership" | "warning",
  title: string, 
  content: string, 
  choices?: Choice[] //list all the choices


}