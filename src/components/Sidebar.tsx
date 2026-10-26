import React from 'react'
import type { Character } from '../types/characterCreate'


type SidebarProps = {
  character: Character

}

const Sidebar = ({character} : SidebarProps) => {
  return (
    <div className=''>Test of sidebar, character name is {character.name}</div>
  )
}

export default Sidebar