import { ADDED, DELETED, LOADED, SEARCHBOOKS, UPADTED } from "./actionTypes"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books
    }
}

export const added = (books) => {
    return {
        type: ADDED,
        payload: books
    }
}

export const updated = (bookId, books) => {
    return {
        type: UPADTED,
        payload: {
            bookId,
            books
        }
    }
}

export const searchBooks = (bookName) => {
    return {
        type: SEARCHBOOKS,
        payload: bookName
    }
}

export const deleted = (bookId) => {
    return {
        type: DELETED,
        payload: bookId
    }
}