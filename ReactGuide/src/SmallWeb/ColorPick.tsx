import React,{useState} from "react"
    function ColorPick() {
        const [color, setColor] = useState("#CB4D4D");
        const callColor = (e) => { //CHANGES THE COLOR VALUE TO COLOR
            setColor(e.target.value)
        }
        return (
            <div className="all">
                <h2>Color Picker</h2>
                <div className="content" style={{ background: color }}>
                    <p>Selected Color:{color}</p>
                </div>
                <label>
                    Select Color:
                </label>
                <input type="color" onChange={callColor}/>
            </div>
        )
    }
export default ColorPick