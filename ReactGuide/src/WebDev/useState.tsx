import React, { useState } from "react";
function USESTATE() {

    const hello = () => {
        console.log("Hello");
        return 10;
    } //Just remember here we don't want to use objects if we want to create a new separate color
    //What we previously done is created a object inside useState and reated a color and count
    //If we edit the counter, then previous elements will get not be available and we have to mention the previous state here.

    //The above methodologies are quite complex and we used the below functions
    const [count, updateCount] = useState(() => hello()) //uses the return value
    const [color, setColor] = useState(() => "Blue") 
    const decrement = () => {
        updateCount((pre) => pre - 1); //Here I am using the previous counter because, I need to decrease the elements
        //from the previous value. So I am using the callback function. If you use just count then it will just add or subtract
        //from the element and when I call updateCount next it will not get executed. Only after I clidk again it will execute
        // updateCount((pre) => pre - 1);
        setColor("Red");
    }
    const increment = () => {
        updateCount((pre) => pre + 1);
        setColor("Green");
    }
    return (
        <>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <p>{color}</p>
            <button onClick={decrement}>-</button>
        </>
    )
}
export default USESTATE