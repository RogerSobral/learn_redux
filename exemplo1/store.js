const { createStore } = Redux;


// O estado inicial é definido como 0 (caso state não seja passado).
const counterReducer = (state = 0, action) => {

    //Ele fica ouvindo o action para poder mudar o estado
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store=createStore(counterReducer)

const render =()=>{
    document.getElementById('counter').innerText = store.getState()
}

// Subscrevendo a função render para ser chamada sempre que o estado mudar
store.subscribe(render);

// Exportando o store para ser usado em outros arquivos
window.store = store;

