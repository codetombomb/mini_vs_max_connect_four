import './style.scss';

function Space({player}: {player:string}) {

  function playedSpaceClassName() {
    if (player !== "") {
      return `Space--${player}`
    } else {
      return ``
    }
  }

  return (
    <div className={`Space ${playedSpaceClassName()}`}></div>
  );
}

export default Space;