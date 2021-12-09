import useWindowWidth from "../../hooks/useWindowWidth"
import usePageTitleClicked from "../../hooks/usePageTitleClicked";

import './style.scss';

function PlayerStats({player}: {player: string}) {
  const screenWidth = useWindowWidth()
  const [clicked, handleClick] = usePageTitleClicked()

  return (
    <div className={`PlayerStats PlayerStats--${player}`}>
      {screenWidth}
      <button onClick={handleClick}>{clicked}</button>
    </div>
  );
}

export default PlayerStats;