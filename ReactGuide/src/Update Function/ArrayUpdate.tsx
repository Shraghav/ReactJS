import { useState } from "react";

function ArrayUpdate() {
  const [fruit, setfruit] = useState(["Apple", "Orange", "Grapes"]);
  const callAddFruit = () => {
    const newFruit = document.getElementById("fruit-add").value;
    document.getElementById("fruit-add").value = "";
    setfruit([...fruit, newFruit]);
  };

  const callSubtractFruit = (index) => {
    setfruit(fruit.filter((_, i) =>
      i != index
    ))
  };
  return (
    <div>
      <h2>List of Fruits</h2>
      <ol>
        {fruit.map((fruit, index) => (
          <li onClick={() => callSubtractFruit(index)} key={index}>
            {fruit}
          </li>
        ))}
      </ol>
      <input placeholder="Add fruits" id="fruit-add" />
      <button onClick={callAddFruit}>Add Fruit</button>
    </div>
  );
}
export default ArrayUpdate;