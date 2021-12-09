import PlayerStats from '../PlayerStats'
import Button from '../Button'

import './style.scss';

function ControlPanel() {
  return (
    <div className="ControlPanel">
      <div className="ControlPanel__info">
        <PlayerStats player="player-1"/>
        <PlayerStats player="player-2"/>
      </div>
      <div className="ControlPanel__buttons">
        <Button text="End Game"/>
      </div>
    </div>
  );
}

export default ControlPanel;