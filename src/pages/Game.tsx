import React from 'react'

type GameProps = {
  propTest : string
}

const Game = ({propTest = "default"} : GameProps) => {
  return (
    <div>Routing, proptest is {propTest}</div>
  )
}

export default Game