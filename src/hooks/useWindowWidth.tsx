import {useState, useEffect} from "react"

function useWindowWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", handleWidthChange)
    })

    const handleWidthChange = () => {
        setScreenWidth(window.innerWidth)
    }

    return screenWidth
}

export default useWindowWidth