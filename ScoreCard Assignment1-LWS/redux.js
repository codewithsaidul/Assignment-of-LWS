const addMatchEl = document.querySelector(".lws-addMatch");
const incrementEl = document.querySelector(".lws-increment");
const decremetEl = document.querySelector(".lws-decremet");
const allMatchesEl = document.querySelector(".all-matches");


const initialState = {
  matchCount: 1,
  matches: [
    {
      id: 1,
      value: 0,
    },
  ],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        matchCount: state.matchCount + 1,
        matches: [...state.matches, { id: state.matches.length + 1, value: 0 }],
      };
    case "INCREMENT":
      return {
        ...state,
        matchCount: state.matchCount,
        matches: state.matches.map((match) =>
          match.id === action.id
            ? { ...match, value: match.value + action.paylod }
            : match
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        matchCount: state.matchCount,
        matches: state.matches.map((match) =>
          match.id === action.id
            ? { ...match, value: Math.max(0, match.value - action.paylod) }
            : match
        ),
      };
    case "RESET":
      return {
        ...state,
        matches: state.matches.map((match) => ({
          ...match,
          value: 0,
        })),
      };

    case "DELETE":
      const updatState = state.matches.filter(
        (match) => match.id !== action.id
      );
      const assginNewId = updatState.map((match, index) => ({
        ...match,
        id: index + 1,
      }));
      return {
        ...state,
        matchCount: state.matchCount - 1,
        matches: assginNewId,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(matchReducer);

const renderMatches = (matches) => {
  allMatchesEl.innerHTML = ""; // Clear previous content

  matches.forEach((match) => {
    const matchEl = document.createElement("div");
    matchEl.classList.add("match");
    matchEl.setAttribute("data-id", match.id);
    matchEl.innerHTML = `
        <div class="wrapper">
          <button class="lws-delete" data-id="${match.id}">
            <img src="./image/delete.svg" alt="" />
          </button>
          <h3 class="lws-matchName">Match ${match.id}</h3>
        </div>
        <div class="inc-dec">
          <form id="inc-form-${match.id}" class="incrementForm">
            <h4>Increment</h4>
            <input type="number" id="increment${match.id}" class="lws-increment" />
          </form>
          <form class="decrementForm">
            <h4>Decrement</h4>
            <input type="number" id="decrement${match.id}" class="lws-decrement" />
          </form>
        </div>
        <div class="numbers">
          <h2 class="lws-singleResult">${match.value}</h2>
        </div>
      `;
    allMatchesEl.appendChild(matchEl);
  });
};

store.subscribe(() => {
  const state = store.getState();
  renderMatches(state.matches);
});

// Add a New Match
addMatchEl.addEventListener("click", () => {
  store.dispatch({
    type: "ADD",
  });
  const matchesEl = document.querySelectorAll(".match");
  if (matchesEl.length > 1) {
    const err = document.querySelector(".err-msg");
    return err.innerHTML = ""
}
});


// Delete a Match
allMatchesEl.addEventListener("click", (e) => {
  const deleteEl = e.target.closest(".lws-delete");

  if (deleteEl) {
    const matchElement = deleteEl.closest(".match");

    if (matchElement) {
        const id = parseInt(matchElement.dataset.id);
        
        const matchesEl = document.querySelectorAll(".match");
        if (id) {

            if (matchesEl.length === 1) {
                const err = document.querySelector(".err-msg");
                err.innerHTML = "You must have at least one more match to proceed."
                const timeOut = setTimeout(() => {
                    err.innerHTML = ""
                }, 2000)
                return timeOut
            }

            store.dispatch({
                type: "DELETE",
                id: id
            })
            matchElement.remove()
        }
    }
  }
});



// Increment or Decrement Score

allMatchesEl.addEventListener("submit", (e) => {
    e.preventDefault();

    // increment score
    const incrementForm = e.target.classList.contains("incrementForm")
    if (incrementForm ) {
        const incrementEl = e.target.querySelector(".lws-increment");
        const value = parseInt(incrementEl.value)

        const matchEl = incrementEl.closest(".match");
        const matchId = parseInt(matchEl.dataset.id)

        if (matchId) {
            store.dispatch({
                type: "INCREMENT",
                id: matchId,
                paylod: value
            })
        }
    }


    // decrement score
    const decrementForm = e.target.classList.contains("decrementForm")
    if (decrementForm) {
        const decrementEl = e.target.querySelector(".lws-decrement");
        const value = parseInt(decrementEl.value);
        const matchEl = decrementEl.closest(".match")
        const matchId = parseInt(matchEl.dataset.id)
        
        if (matchId) {
            store.dispatch({
                type: "DECREMENT",
                id: matchId,
                paylod: value
            })
        }
    }

})


// Reset All Match Score
const resetEl = document.querySelector(".lws-reset");

resetEl.addEventListener("click", () => {
    store.dispatch({
        type: "RESET"
    })
})
