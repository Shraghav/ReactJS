import { useEffect, useRef, useState } from "react";

function UseRef() {
    //1st use case: Here it will not render again and again like state.In state, after the first update
    //it got changed and will keep on adding the previous element upto infinite. So using useEffect and useref , it renders 
    //only 1 time and the value got changed again and again
    const render = useRef(1);
    const inputRef = useRef("");
    const [c, setC] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        // render.current = render.current + 1;
        // setC(pre => pre + 1); not suitable (infinite)
        inputRef.current = name;

    }, [name])
    // const callFocus = () => {
    //     inputRef.current.focus();
    //     // inputRef.current.value = "Hello" this is not suitable as the state should be updated whenevr any change made. 
    //     //Here useRef won't render the component
    // }
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <p>{render.current} times rendered</p>
            {/* <button onClick={callFocus} >Click</button> */}
            <p>My name is {name} previously it was {inputRef.current}</p>
            {/* previous name will be stored in inputref. current and current name will be name */}
        </div>
    )
}
export default UseRef;