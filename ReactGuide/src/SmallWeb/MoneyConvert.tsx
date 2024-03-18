import { useState } from "react"

export default function MoneyChange() {
    const [money, setMoney] = useState(0);
    const [change, setChange] = useState("Dollar");
    let convert;
    if (change == "Dollar") {
        convert = money * 82.84;
    }
    else {
        convert = money * 0.012;
    }
    
    const callConvert = function (e) {
        setMoney(e.target.value)
    }
    const callToggle = function () {
        setChange(change == "Dollar" ? "Rupee" : "Dollar");
        setMoney(0);
    }
    return (
        <div className="all">
            <p>{change == "Rupee" ? "Enter money in Rupees:" : "Enter money in Dollars:"}</p>
            <input type="number" value={money} onChange={callConvert} />
            <p>{change == "Dollar" ? "Money in Rupees:" : "Money in Dollars:"} {convert}</p>
            <button onClick={callToggle}>Toggle</button>
        </div>
    )
}