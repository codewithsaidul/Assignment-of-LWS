import { SEARCHBOOKS } from "./actionTypes"

export const searchBooks = (query) => {
    return {
        type: SEARCHBOOKS,
        payload: query
    }
}