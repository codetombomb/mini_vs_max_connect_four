import { useState , useEffect} from "react";

import themes from "../assets/themes"

function useThemes() {

    // debugger
    const [theme, setTheme] = useState(themes[0])

    useEffect(() => {
        const { style } = document.documentElement
        const themeVariables = theme[1]
        for (const [cssVariable, hexColor] of Object.entries(themeVariables)) {
            style.setProperty(cssVariable, hexColor)
        }

        // Sets the theme variables back to an empty string before re-running or unmounting
        return () => {
            for (const [cssVariable, hexColor] of Object.entries(themeVariables)) {
            style.setProperty(cssVariable, "")
        }}
    })

    // break statements needed for fallthrough. I thought a switch will stop after it finds a case?
    function changeTheme(themeName: string) {
        switch (themeName) {
            case "darkCyan":
                setTheme(themes[0])
                break
            case "pictonBlue":
                setTheme(themes[1])
                break
            case "neonGarden":
                setTheme(themes[2])
                break
            default:
                setTheme(themes[0])
        }
    }

    return changeTheme
}

export default useThemes
