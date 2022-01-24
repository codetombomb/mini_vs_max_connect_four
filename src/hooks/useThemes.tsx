import { useState , useEffect} from "react";
import themes from "../assets/themes"

function useThemes() {
    const [theme, setTheme] = useState(themes[0])

    useEffect(() => {
        // Editing the DOM directly might be bad, should I use useRef?
        const { style } = document.documentElement
        const themeVariables = theme[1]
        for (const [cssVariable, hexColor] of Object.entries(themeVariables)) {
            style.setProperty(cssVariable, hexColor)
        }

        // Sets the theme variables back to an empty string before re-running or unmounting
        return () => {
            for (const [cssVariable] of Object.entries(themeVariables)) {
            style.setProperty(cssVariable, "")
        }}
    })

    // ES Lint complains about fallthrogh if I don't manually tell switch to break.
    // Is there a better alternative to verbose switch statements?
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
