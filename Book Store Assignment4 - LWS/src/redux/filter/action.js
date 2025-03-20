import { FEATUREDBOOKS } from "./actionTypes"




export const featuredBooks = (bookStatus) => {
    return {
        type: FEATUREDBOOKS,
        payload: bookStatus
    }
}