import {useEffect, useState} from "react"

import './style.scss';

function PlayerStats({player}: {player: string}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange)
  })

  const handleWidthChange = () => {
    setScreenWidth(window.innerWidth)
  }

  return (
    <div className={`PlayerStats PlayerStats--${player}`}>
      {screenWidth}
    </div>
  );
}

export default PlayerStats;