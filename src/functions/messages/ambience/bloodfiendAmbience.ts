import type { Message, messageNumberProp } from "../../../types/Message";


export function bloodfiendAmbience({messageNumber} : messageNumberProp) {
  const type = "ambience"
  const optionCount = 1 //upper bounds of random
  
  const randomGen = optionCount //for now hardcoded but it'll be random when I need it to be 
  if (randomGen === 1) //also probably wants to be a switch statement later
  {
    const title = "Bloodfiend ambience"
    const content = "Not gonna be working on this one for a while"
    const message : Message = {messageNumber, type, title, content}
    return message
  }


  const error : Message = {messageNumber, type: "ambience", title: "Error", content: "Error" }
  return error
}