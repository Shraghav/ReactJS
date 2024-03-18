import React, { useEffect, useState } from 'react'
function WindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const callWindowSize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", callWindowSize);
        console.log("Hello");
        return () => (
            window.removeEventListener("resize", callWindowSize)
        )
    }, [])
    return (
        <div>{windowWidth}</div>
    )
}
export default WindowSize;