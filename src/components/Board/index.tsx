import {useState} from 'react'

import Column from "../Column"

import './style.scss';

function Board() {
  const initialSpaceState = new Array(7).fill(["player-1", "", "player-2", "", "", ""])
  const [spaces, setSpaces] = useState(initialSpaceState)

  return (
    <div className="Board">
      <Column id={1} spaces={spaces[0]}/>
      <Column id={2} spaces={spaces[1]}/>
      <Column id={3} spaces={spaces[2]}/>
      <Column id={4} spaces={spaces[3]}/>
      <Column id={5} spaces={spaces[4]}/>
      <Column id={6} spaces={spaces[5]}/>
      <Column id={7} spaces={spaces[6]}/>
    </div>
  );
}

export default Board;