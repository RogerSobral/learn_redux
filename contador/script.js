// Estudo de um contador 

const { createStore } = Redux;

const changeReducer = (state = 1, action) => {
    switch (action.type) {
        case "decrementar":
            return state - 1; // Use return state - 1 instead of state -= 1
        case "acrescentar":
            return state + 1; // Use return state + 1 instead of state += 1
        default:
            return state;
    }
}

const store = createStore(changeReducer);

const render = () => {
    document.getElementById("resposta").innerHTML = store.getState();
}

store.subscribe(render);

// Corrected the event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#btn1").addEventListener("click", () => {
        store.dispatch({ type: "acrescentar" }); // No need to pass state here
    });

    document.querySelector("#btn2").addEventListener("click", () => {
        store.dispatch({ type: "decrementar" }); // No need to pass state here
    });
});

// Initial render
render();