import { useState , useEffect} from "react";

interface CSSVariable {
    name: string;
    value: string;
}

// const darkCyan: CSSVariable[] = [
//     {
//         name: "--white",
//         value: "#fcfbf3"
//     },
//     {
//         name: "--light-gray",
//         value: "#efe8d8"
//     },
//     {
//         name: "--medium-gray",
//         value: "#dfd8c9"
//     },
//         {
//         name: "--dark-gray",
//         value: "#3f3c36"
//     },
//     {
//         name: "--player-1-color",
//         value: "#167c80"
//     },
//     {
//         name: "--player-2-color",
//         value: "#e54b4b"
//     }
// ]

const pictonBlue: CSSVariable[] = [
    {
        name: "--white",
        value: "#ffffff"
    },
    {
        name: "--light-gray",
        value: "#f3f3f3"
    },
    {
        name: "--medium-gray",
        value: "#e2e2e2"
    },
        {
        name: "--dark-gray",
        value: "#434343"
    },
    {
        name: "--player-1-color",
        value: "#499eeb"
    },
    {
        name: "--player-2-color",
        value: "#eb2d53"
    }
]

function useThemes() {

    // debugger
    const [theme, setTheme] = useState("blue")

    function logClick() {
        console.log(`CLICKED IT!, state ${theme}`)
    }

    useEffect(() => {
        const { style } = document.documentElement
        pictonBlue.forEach(variable => {
            style.setProperty(variable.name, variable.value)
        })

        // Sets the theme variables back to an empty string before re-running or unmounting
        return () => {
            pictonBlue.forEach(variable => {
                style.setProperty(variable.name, "")
            })
            debugger
            }
    })

    // break statements needed for fallthrough. I thought a switch will stop after it finds a case?
    // function changeTheme(themeName: string) {
    //     switch (themeName) {
    //         case "pictonBlue":
    //             setTheme(pictonBlue)
    //             break
    //         case "darkCyan":
    //             setTheme(darkCyan)
    //             break
    //         default:
    //             setTheme(pictonBlue)
    //     }
    // }

    // return changeTheme
    // return logClick
}

export default useThemes
