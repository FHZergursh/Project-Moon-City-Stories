export type Choice = {
  description: string,
  aftermathDescription: string,
  result: string //rewards and punishments, stat changes, ect....

}

export type Message = {
  type: "ambience" | "choice" | "faction-membership" | "warning",
  title: string, 
  content: string, 
  choices?: Choice[] //list all the choices


}