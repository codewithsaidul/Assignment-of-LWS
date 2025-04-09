import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    searchValue: "",
    status: "all",
}


const filterSlice = createSlice({
    name: "filterbooks",
    initialState,
    reducers: {
        searchBooks: (state, action) => {
            state.searchValue = action.payload
        },
        filterBooks: (state, action) => {
            state.status = action.payload
        }
    }
})


export default filterSlice.reducer;

export const { searchBooks, filterBooks } = filterSlice.actions