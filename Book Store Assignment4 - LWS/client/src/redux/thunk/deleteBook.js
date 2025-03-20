import { deleted } from "../books/action";

const deleteBook = (bookId) => async(dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
        method: "DELETE",
    })
    const book = await response.json();


    dispatch(deleted(book.id))
}


export default deleteBook