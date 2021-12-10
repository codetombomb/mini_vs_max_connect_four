import Space from "../Space"

import './style.scss';

function Column({id, spaces, handleClick}:{id: number; spaces: string[]; handleClick: any}) {

  return (
    <div className="Column" id={`col-${id}`} onClick={handleClick}>
      <div className="Column__played">
        <Space player={spaces[5]}/>
        <Space player={spaces[4]}/>
        <Space player={spaces[3]}/>
        <Space player={spaces[2]}/>
        <Space player={spaces[1]}/>
        <Space player={spaces[0]}/>
      </div>
    </div>
  );
}

export default Column;