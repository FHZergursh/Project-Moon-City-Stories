import type { Choice, Message, Result } from "../../../types/Message"

export function testChoiceMessage(messageNumber : number) {
  const type = "choice"
  const optionCount = 1 
  console.log("Start of test Choice")
  
  const randomGen = optionCount 
  if (randomGen === 1) 
  {
    const title = "Choice test!"
    const content = "Has generated successfully!"

    const choice1 : Choice = {description: "Hello world", aftermath: "You clicked the test choice, congrats", result: {positive: true, combatSkillChange: 5}}
    const choice2 : Choice = {description: "Second choice", aftermath: "Different aftermath", result: {positive: true, charismaSkillChange: 5}}
    const choices = [choice1, choice2]


    const message : Message = {messageNumber, type, title, content, choices}
    return message
  }


  const error : Message = {messageNumber, type: "ambience", title: "Error", content: "Failure in ambienceBaby()" }
  console.log("Finished with the ambience")
  return error

}