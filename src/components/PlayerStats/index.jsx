import './style.scss';

function PlayerStats({player}) {
  return (
    <div className={`PlayerStats PlayerStats--${player}`}>
        {player}
    </div>
  );
}

export default PlayerStats;