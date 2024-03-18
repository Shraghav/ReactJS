import { useState } from "react";

function ObjectUpdate() {
    const [book, setBook] = useState({
        published: 2027,
        title: "A Man Called Ove",
        ratings: 1000
    })
    // const [title, setTitle] = useState("A Man Called Ove");
    // const [publish, setPublish] = useState(2021);
    // const [ratings, setRatings] = useState(10000);
    const callTitle = (event) => {
        setBook((b) => ({ ...b, title: event.target.value }))
    }

    const callpublished = (event) => {
        setBook((b) => ({ ...b, published: event.target.value }))
    }

    const callratings = (event) => {
        setBook((b) => ({ ...b, ratings: event.target.value }))
    }


    // const callTitle = (event) => {
    //     setTitle(event.target.value)
    // }

    // const callpublished = (event) => {
    //     setPublish(event.target.value)
    // }

    // const callratings = (event) => {
    //     setRatings(event.target.value)
    // }

    return (
        <div>
            <p>{book.title} {book.published} {book.ratings} </p>
            <input onChange={callTitle} value={book.title}></input>
            <input onChange={callpublished} value={book.published}></input>
            <input onChange={callratings} value={book.ratings}></input>
        </div>
    )
}
export default ObjectUpdate;