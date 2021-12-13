import PlayerStats from '../PlayerStats'
import Button from '../Button'
import ThemeSelector from '../ThemeSelector'


import './style.scss';

function ControlPanel({turns, currentPlayer}:{turns:number; currentPlayer:string}) {



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