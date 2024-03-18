import React, { useState } from "react";
function BasicState() {
    //for name we are creating state functions and useState
    const [name, setName] = useState("None"); //always mention the type you pass here so that it will not throw any error while using them.
    const updateName = () => {
        setName("Raghav");
    }

    //for age too same but with two state functions
    const [age, setAge] = useState(18);
    const updateAgeAdd = () => {
        setAge((age) => age + 1) //we want to edit from the previous value and not from the value which is created 
    }
    const updateAgeSub = () => {
        setAge((age) => age - 1) //we want to edit from the previous value and not from the value which is created 
    }

    //No with some boolean values
    const [isEmployed, setEmployed] = useState(false);
    const updateEmployed = () => {
        setEmployed(!isEmployed);
    }
    return (
        <>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
            <br></br>
            <br></br>
            <button onClick={updateAgeAdd}>Add Age </button>
            <p>Age: {age}</p>
            <button onClick={updateAgeSub}>Subtract Age </button>

            <p>Employed: {isEmployed ? "Yes" : "No"}</p> //use the isEmplued where you want to write stuffs
            <button onClick={updateEmployed}>Set name</button>
        </>
    )
}
export default BasicState;