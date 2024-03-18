import { useState, useEffect } from "react"

const UseEffect = function () {
    const [resourceType, setResourceType] = useState("albums");
    const [array, setArray] = useState([]);
    useEffect(
        () => {
            console.log(resourceType);
            fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
                .then(response => response.json())
                .then(json => setArray(json))
        }, [] //whenever the value changed this runs
    )

    const callHero = () => {
        setResourceType("albums")
    }
    const callHeroin = () => {
        setResourceType("posts")
    }
    const callVillain = () => {
        setResourceType("comments")
    }
    return (
        <div>
            <p>{resourceType}</p>
            <button onClick={callHero}>albums</button>
            <button onClick={callHeroin}>posts</button>
            <button onClick={callVillain}>comments</button>
            {array.map((item) =>
                <p>{JSON.stringify(item)}</p>
            )}
        </div>
    )
}
export default UseEffect