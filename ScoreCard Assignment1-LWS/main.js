const addMatchEl = document.querySelector(".lws-addMatch");
const incrementEl = document.querySelector(".lws-increment");
const decremetEl = document.querySelector(".lws-decremet");

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
    case "ADD_MATCH":
      return {
        ...state,
        matchCount: state.matchCount + 1,
        matches: [...state.matches, { id: state.matches.length + 1, value: 0 }],
      };
    case "DELETE_MATCH":
      const updatedMatches = state.matches.filter(
        (match) => match.id !== action.id
      ); // Remove match by ID
      // Decrease the id of remaining matches by 1
      const updatedMatchesWithNewId = updatedMatches.map((match, index) => ({
        ...match,
        id: index + 1, // Reassign new id (starting from 1)
      }));

      return {
        ...state,
        matchCount: state.matchCount - 1,
        matches: updatedMatchesWithNewId,
      };
    case "INCREMENT":
      return {
        matchCount: state.matchCount,
        matches: state.matches.map(
          (match) =>
            match.id === action.id
              ? { ...match, value: match.value + action.payload } // Decrement the value
              : match // Leave other matches unchanged
        ),
      };
    case "DECREMENT":
      return {
        matchCount: state.matchCount,
        matches: state.matches.map(
          (match) =>
            match.id === action.id
              ? { ...match, value: Math.max(0, match.value - action.payload) } // Decrement the value
              : match // Leave other matches unchanged
        ),
      };
    case "RESET":
      return {
        matches: state.matches.map((match) => ({
          ...match,
          value: 0,
        })),
      };
    default:
      return state;
  }
};

const store = Redux.createStore(matchReducer);

const renderMatches = (matches) => {
  const allMatchesEl = document.querySelector(".all-matches");
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

addMatchEl.addEventListener("click", () => {
  store.dispatch({
    type: "ADD_MATCH",
  });
});

const allMatchesEl = document.querySelector(".all-matches");
const inputForm = document.querySelector(".incrementForm");

allMatchesEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // increment form ইনপুট ফিল্ডের জন্য
  if (e.target.classList.contains("incrementForm")) {
    const incrementField = e.target.querySelector(".lws-increment");
    const incrementValue = incrementField ? parseInt(incrementField.value) : 0;

    const matchElement = e.target.closest(".match");
    const id = parseInt(matchElement.dataset.id);

    // Increment Match score
    if (incrementField.classList.contains("lws-increment")) {
      store.dispatch({ type: "INCREMENT", id: id, payload: incrementValue });
    }
  }

  // decrement form ইনপুট ফিল্ডের জন্য
  if (e.target.classList.contains("decrementForm")) {
    const decrementField = e.target.querySelector(".lws-decrement");
    const decrementValue = decrementField ? parseInt(decrementField.value) : 0;

    const matchElement = e.target.closest(".match");
    const id = parseInt(matchElement.dataset.id);

    if (decrementField.classList.contains("lws-decrement")) {
      store.dispatch({ type: "DECREMENT", id: id, payload: decrementValue });
    }
  }
});

// reset the every match score

const resetEl = document.querySelector(".lws-reset");

resetEl.addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});

// delete a match

allMatchesEl.addEventListener("click", (e) => {
  // Check if the clicked element is a button with class 'lws-delete'
  const deleteButton = e.target.closest(".lws-delete");

  if (deleteButton) {
    // Find the closest '.match' element to the clicked delete button
    const matchElement = deleteButton.closest(".match");

    if (matchElement) {
      // Get the 'data-id' from the closest '.match' element
      const dataID = matchElement.dataset.id;

      const allMatch = document.querySelectorAll(".match")

      if (allMatch.length === 1) {
        return alert("You must have at least one more match to proceed.");
      }
      
      // Remove the match element from the DOM
      store.dispatch({
        type: "DELETE_MATCH",
        id: parseInt(dataID),
      });
      matchElement.remove();
    }
  }
});
