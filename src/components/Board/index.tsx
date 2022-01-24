import Column from "../Column"

import './style.scss';

interface BoardProps {
  spaces: string[][];
  handleColumnClick: (num: number) => void;
}

function Board({spaces, handleColumnClick}:BoardProps) {
  
  return (
    <div className="Board">
      <Column id={1} spaces={spaces[0]} handleClick={() => handleColumnClick(1)}/>
      <Column id={2} spaces={spaces[1]} handleClick={() => handleColumnClick(2)}/>
      <Column id={3} spaces={spaces[2]} handleClick={() => handleColumnClick(3)}/>
      <Column id={4} spaces={spaces[3]} handleClick={() => handleColumnClick(4)}/>
      <Column id={5} spaces={spaces[4]} handleClick={() => handleColumnClick(5)}/>
      <Column id={6} spaces={spaces[5]} handleClick={() => handleColumnClick(6)}/>
      <Column id={7} spaces={spaces[6]} handleClick={() => handleColumnClick(7)}/>
    </div>
  );
}

export default Board;