const incrementEl = document.getElementsByClassName("lws-increment");
const decrementEl = document.getElementsByClassName("lws-decrement");
const resultEl = document.getElementsByClassName("lws-singleResult");


const initialValue = {
    value: 0
}


const matchStore = (state = initialValue, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, value: state.value + action.payload }
        case "DECREMENT":
            return {...state, value: state.value - action.payload }
        default:
            return state;
    }
}


const store = Redux.createStore(matchStore);

const render = () => {
    const state = store.getState();
    resultEl.textContent = state.value;
}

store.subscribe(render)



incrementEl.addEventListener('onchange', () => {
    console.log("keydown", incrementEl)
})