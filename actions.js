// actions.js
const increment = () => ({
    type: 'INCREMENT'
});

const decrement = () => ({
    type: 'DECREMENT'
});

// Exportando as ações para serem usadas em outros arquivos
window.increment = increment;
window.decrement = decrement;