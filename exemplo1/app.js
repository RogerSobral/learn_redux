// app.js
document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrement());
});

// Renderizando o estado inicial
render();