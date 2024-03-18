import { useState } from "react";

function ArrayObjUpdate() {
    //here setting up useState 
  const [car, setCar] = useState([]); //for accessing the array of objects
  const [name, setName] = useState(""); //for accessing the name and respectively
  const [year, setYear] = useState(new Date().getFullYear());
  const [model, setModel] = useState("");

    //adds new car evertime the button is clicked
    const callAdd = () => {
        //creating the object because we are having the entire elements
        const newCar = { realName: name, realYear: year, realModel: model }; 
        //here set car basically takes the previous elements and adding the current object elements
        setCar((c) => [...c, newCar]);
        //back to normal
        setModel("");
        setName("");
        setYear(new Date().getFullYear());
    };
    
    //similar to previous callRemove
    //takes index from the list and erase it 
    const callRemove = (index) => {
        setCar(car.filter((c, i) => i !== index)); //comparing the clicked index with overall elements
    };
    
    const callName = (event) => {
        setName(event.target.value);
    }; //setting the name and respectively

    const callYear = (event) => {
        setYear(event.target.value);
    };

    const callModel = (event) => {
        setModel(event.target.value);
    };
    
  return (
    <div>
          <ol>
              {/* looping the entire car objects and writing realyear, realname and realmodel */}
              {/* also has onclick to remove the elements which is touched by the elements */}
              {/* car will be having multiple array of objects and we are looping the objects with respective year, name , model */}
        {car.map((c, i) => (
          <li key={i} onClick={() => callRemove(i)}>
            {c.realYear} {c.realName} {c.realModel}
          </li>
        ))}
          </ol>
      <input
              placeholder="enter name of the car"
              //value is set to name
              //onChange will call the name
        value={name}
        onChange={callName}
      />
      <input placeholder="enter the year" value={year} onChange={callYear} />
          <input placeholder="enter the model" value={model} onChange={callModel} />
          {/* this will call create newcar object whenever clicked */}
      <button onClick={callAdd}>Click me</button>
    </div>
  );
}
export default ArrayObjUpdate;
