import { updated } from "../books/action";

const updateBook = (book) => async(dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${book.id}`, {
        method: "PATCH",
        body: JSON.stringify(book),
        headers: {
            "Content-type": "application/json; charset= UTF-8"
        }
    })
    const updatBook = await response.json();


    dispatch(updated(updatBook))
}


export default updateBook