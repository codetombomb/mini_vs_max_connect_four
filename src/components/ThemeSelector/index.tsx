import './style.scss';

import useThemes from "../../hooks/useThemes"
import themes from '../../assets/themes';
import './style.scss';
import ThemeButton from "../ThemeButton"


function ThemeSelector() {

    const handleClick = useThemes()

    const renderThemes = themes.map(theme => {
        const themeName = theme[0]
        const themeColor = theme[1]["--player-1-color"]
        return <ThemeButton handleClick={() => handleClick(themeName)} themeColor={themeColor}/>
    })

    return (
        <div className="ThemeSelector">
            {renderThemes}
        </div>
    )
}

export default ThemeSelector