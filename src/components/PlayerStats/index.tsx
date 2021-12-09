import useWindowWidth from "../../hooks/useWindowWidth"

import './style.scss';

function PlayerStats({player}: {player: string}) {
  const screenWidth = useWindowWidth()

  return (
    <div className={`PlayerStats PlayerStats--${player}`}>
      {screenWidth}
    </div>
  );
}

export default PlayerStats;