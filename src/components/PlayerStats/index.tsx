import './style.scss';

interface PlayerStatsProps {
  player?: string;
  currentPlayer?: boolean;
  turns?: number;
}

function PlayerStats({player, currentPlayer, turns}: PlayerStatsProps) {
  return (
    <div className={`PlayerStats PlayerStats--${player}`}>
      {currentPlayer
        ? <span className="PlayerStats__current-player-indicator">{currentPlayer ? `${player}'s turn` : null}</span>
        : null
      }
      {turns !== undefined
        ? <>
            <span className="PlayerStats__turn-indicator-header">Turns</span>
            <span className="PlayerStats__turn-indicator">{turns}</span>
          </>
        : null
      }
    </div>
  );
}

export default PlayerStats;