//Using hardcoded values for now until generation is ready

import type { Message } from "../../../types/Message"



export function ambienceGlobal() { 
  console.log("Function")
}


export function ambienceBaby(messageNumber : number ) {
  const type = "ambience"
  const optionCount = 1 //upper bounds of random
  console.log("Start of ambienceBaby")
  
  const randomGen = optionCount //for now hardcoded but it'll be random when I need it to be 
  if (randomGen === 1) //also probably wants to be a switch statement later
  {
    const title = "The first ambience message!"
    const content = "Has generated successfully!"
    const message : Message = {messageNumber, type, title, content}
    return message
  }


  const error : Message = {messageNumber, type: "ambience", title: "Error", content: "Failure in ambienceBaby()" }
  console.log("Finished with the ambience")
  return error
}

export function ambienceChild(messageNumber : number ) {
  const type = "ambience"
  const optionCount = 1

  const randomGen = optionCount
  if (randomGen === 1) 
  {
    const title = "Child ambience!"
    const content = "Placeholder"
    const message : Message = {messageNumber, type, title, content}
    return message
  }

  const error : Message = {messageNumber, type: "ambience", title: "Error", content: "Failure in ambienceChild()" }
  return error
}

export function ambienceTeenager(messageNumber : number) {
  const type = "ambience"
  const optionCount = 1

  const randomGen = optionCount
  if (randomGen === 1) 
  {
    const title = "Child ambience!"
    const content = "Placeholder"
    const message : Message = {messageNumber, type, title, content}
    return message
  }


  const error : Message = {messageNumber, type: "ambience", title: "Error", content: "Failure in ambienceTeenager()" }
  return error
}

export function ambienceAdult(messageNumber : number) {
  const type = "ambience"
  const optionCount = 1

  const randomGen = optionCount
  if (randomGen === 1) 
  {
    const title = "Child ambience!"
    const content = "Placeholder"
    const message : Message = {messageNumber, type, title, content}
    return message
  }


  const error : Message = {messageNumber, type: "ambience", title: "Error", content: "Failure in ambienceAdult()" }
  return error
}

export function ambienceOld(messageNumber : number) {
  const type = "ambience"
  const optionCount = 1

  const randomGen = optionCount
  if (randomGen === 1) 
  {
    const title = "Child ambience!"
    const content = "Placeholder"
    const message : Message = {messageNumber, type, title, content}
    return message
  }

  const error : Message = {messageNumber, type: "ambience", title: "Error", content: "Error" }
  return error
}