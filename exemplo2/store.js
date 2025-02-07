const { createStore } = Redux;

// Reducer
const changeReducer = (state = "Palavra Inicial", action) => {
    if (action.type === "mudar") {
        return action.payload;
    }
    return state;
};




// Criando a store com o reducer persistente
const store = createStore(changeReducer);


// Função para renderizar o estado na UI
const render = () => {
    const resposta = document.querySelector("#resposta");
    const resposta2 = document.querySelector("#resposta2");

    if (resposta) resposta.innerHTML = store.getState();
    if (resposta2) resposta2.innerHTML = store.getState();
    
};

// Atualiza a UI sempre que o estado mudar
store.subscribe(render);

// Evento do botão
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botao");
    if (botao) {
        botao.addEventListener("click", () => {
            const novoValor = document.getElementById("texto").value;

            store.dispatch({ type: "mudar", payload: novoValor });
        });
    }
});

// Garante que a UI seja carregada com o estado persistido
render();
