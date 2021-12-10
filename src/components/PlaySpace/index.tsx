import {useState} from "react"

import Board from '../Board'
import ControlPanel from '../ControlPanel'

import './style.scss';

function PlaySpace() {
    // I need to fill first to be able to map over it.
  // If I pass the array directly in to .fill, then each array references the same array.
  const initialSpaceState = new Array(7).fill("").map(() => ["", "", "", "", "", ""])
  const [spaces, setSpaces] = useState(initialSpaceState)

  const [turns, setTurns]  = useState(0)

  function handleColumnClick(colId: number):void {
    const colIndex:number = colId - 1
    play(colIndex)
  }

  function play(colIndex: number): void {
    const droppedIndex:number = spaces[colIndex].findIndex(
      (space:string) => space === ""
    )
    if (droppedIndex !== -1) {
      // Spread makes newSpaces equal a new array, not point to the old one.
      // If we didn't spread react wouldn't re-render
      let newSpaces = [...spaces]
      newSpaces[colIndex][droppedIndex] = currentPlayer
      setSpaces(newSpaces)
      setTurns(turns + 1)
      switchCurrentPlayer()
    }
  }

  const [currentPlayer, setCurrentPlayer] = useState("player-1")

  function switchCurrentPlayer() {
    if (currentPlayer === "player-1") {
      setCurrentPlayer("player-2")
    } else {
      setCurrentPlayer("player-1")
    }
  }


  return (
    <div className="PlaySpace">
      <Board />
      <ControlPanel />
    </div>
  );
}

export default PlaySpace;