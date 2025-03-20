import { FEATUREDBOOKS } from "./actionTypes";


const initialState = {
    status: "all"
}


const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATUREDBOOKS:
            
            return {
                ...state,
                status: action.payload
            };
    
        default:
            break;
    }
}

export default filterReducer