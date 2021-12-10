import {useState} from 'react'

import Column from "../Column"

import './style.scss';

function Board() {

  console.log("BOARD RENDERED")
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
    <>
    <div className="Board">
      <Column id={1} spaces={spaces[0]} handleClick={() => handleColumnClick(1)}/>
      <Column id={2} spaces={spaces[1]} handleClick={() => handleColumnClick(2)}/>
      <Column id={3} spaces={spaces[2]} handleClick={() => handleColumnClick(3)}/>
      <Column id={4} spaces={spaces[3]} handleClick={() => handleColumnClick(4)}/>
      <Column id={5} spaces={spaces[4]} handleClick={() => handleColumnClick(5)}/>
      <Column id={6} spaces={spaces[5]} handleClick={() => handleColumnClick(6)}/>
      <Column id={7} spaces={spaces[6]} handleClick={() => handleColumnClick(7)}/>
    </div>
    </>
  );
}

export default Board;