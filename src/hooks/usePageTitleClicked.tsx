import {useState, useEffect} from "react"

function usePageTitleClicked(): [number, () => void] {
    const [clicked, setClicked] = useState(0)

    useEffect(() => {
        document.title = `You have clicked ${clicked} times`
    })

    const handleClick = () => {
        console.log("CLICKED")
        setClicked(clicked + 1)
    }

    return [clicked, handleClick]
}

export default usePageTitleClicked