import { configureStore } from "@reduxjs/toolkit";  // Usando o configureStore do RTK
import reducer from "./reducers";  // Supondo que você tenha um arquivo de reducers

const store = configureStore({
  reducer,  // Passando o reducer aqui diretamente
});

export default store;
