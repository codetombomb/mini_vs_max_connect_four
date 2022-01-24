import usePlaySpace from '../../hooks/usePlaySpace/hook';

import Board from '../Board'
import ControlPanel from '../ControlPanel'

import './style.scss';

function PlaySpace() {
  const {spaces, turns, currentPlayer, handleColumnClick} = usePlaySpace()
  return (
    <div className="PlaySpace mint-theme">
      <Board spaces={spaces} handleColumnClick={handleColumnClick}/>
      <ControlPanel turns={turns} currentPlayer={currentPlayer}/>
    </div>
  );
}

export default PlaySpace;