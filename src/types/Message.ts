export type Choice = {
  description: string,
  aftermathDescription: string,
  result: string //rewards and punishments, stat changes, ect....

}

export type Message = {
  messageNumber: number, //starts at 1, increments
  type: "ambience" | "choice" | "faction-membership" | "warning",
  title: string, 
  content: string, 
  choices?: Choice[] //list all the choices


}