import Board from '../Board'
import ControlPanel from '../ControlPanel'

import './style.scss';

function PlaySpace() {
  return (
    <div className="PlaySpace">
      <Board />
      <ControlPanel />
    </div>
  );
}

export default PlaySpace;