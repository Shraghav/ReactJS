import React, { useState } from "react"
function OnChange() {
    const [name, setName] = useState("")
    const callName = (e) => {
        setName(e.target.value)
    }

    const [ltr, setLtr] = useState(0);
    const callLtr = (e) => {
        setLtr(e.target.value);
    }

    const [comment, setComment] = useState("")
    const callComment = (e) => {
        setComment(e.target.value);
    }

    const [payment, setPayment] = useState("");
    const callPayment = function (e) {
        setPayment(e.target.value);
    }

    const [shipping, setShipping] = useState();
    const callShipping = (e) => {
        setShipping(e.target.value);
    }
    return (
        <>
            <p>Enter your name:</p>
            <input onChange={callName} value={name} />
            <p>{name}</p>

            <p>How litres of milk you need?</p>
            <input onChange={callLtr} value={ltr} type="number" />
            <p>{ltr}</p>

            <p>Any Comments?</p>
            <textarea onChange={callComment} value={comment} />
            <p>{comment}</p>

            <p>Select a payment option</p>
            <select onChange={callPayment} value={payment} > //this value only determines which should be displayed in screen
                <option value=" ">Select one option</option>
                <option>Master Card</option>
                <option>Visa</option>
            </select>
            <p>{payment}</p>

            <p>Shipping</p>
            <label>
                <input value="Pick up" onChange={callShipping} checked={shipping == "Pick up"} type="radio" />
                Pick up
            </label>
            <label>
                <input value="Delivery" checked={shipping == "Delivery"} onChange={callShipping} type="radio" />
                Delivery
            </label>

            <p>{shipping}</p>
        </>
    )
}
export default OnChange;