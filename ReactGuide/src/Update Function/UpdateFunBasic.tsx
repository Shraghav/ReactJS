import React, { useState } from "react"
function UpdateFunBasic() {
    const [count, setCount] = useState(0);

    const callCount = () => {
        setCount((c) => c + 1); //check Notion
        setCount((c) => c + 1);
    }
    return (
        <div>
            <button onClick={callCount}>Click</button>
            <p>{count}</p>
        </div>
    )
}
export default UpdateFunBasic