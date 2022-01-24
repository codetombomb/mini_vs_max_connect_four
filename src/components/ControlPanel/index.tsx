import PlayerStats from '../PlayerStats'
import Button from '../Button'
import ThemeSelector from '../ThemeSelector'

import './style.scss';

interface ControlPanelProps {
  turns: number;
  currentPlayer: string;
}

function ControlPanel({turns, currentPlayer}:ControlPanelProps) {
  return (
    <div className="ControlPanel">
      <div className="ControlPanel__info">
        <PlayerStats player="player-1" currentPlayer={currentPlayer === "player-1" ? true : false}/>
        <PlayerStats player="player-2" currentPlayer={currentPlayer === "player-2" ? true : false}/>
        <PlayerStats turns={turns}/>
        <ThemeSelector />
      </div>
      <div className="ControlPanel__buttons">
        <Button text="End Game"/>
      </div>
    </div>
  );
}

export default ControlPanel;