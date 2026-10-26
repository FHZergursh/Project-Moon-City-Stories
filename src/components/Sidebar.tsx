import React from 'react'
import type { Character } from '../types/CharacterCreate.ts'

type SidebarProps = {
  character: Character

}

const Sidebar = ({character} : SidebarProps) => {
  return (
    <div>Test of sidebar, character name is {character.name}</div>
  )
}

export default Sidebar