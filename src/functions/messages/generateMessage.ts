import type { Message } from "../../types/Message"
import { ambienceBaby } from "./ambience/defaultAmbience"

type generateMessageProps = {
  messageCount: number, //key for map, somewhat un-elegant but it works. Remember to +1 for the correct index.
  ageRange: string,
  faction: string,
  rank: string,
  startingLocation: string,
  factionCd: number,
  choiceCd: number

}


export function generateMessage({ messageCount, ageRange, faction, rank, startingLocation, factionCd, choiceCd} : generateMessageProps) { //decide which to use, then call the function
  console.log("Current age range is " + ageRange)
  if (ageRange === "Baby")
  {
    const generated : Message = ambienceBaby(messageCount)
    return generated
  }


  const error : Message = {messageNumber: messageCount, type: "ambience", title: "Error", content: "Failure to route generate." }
  return error

}