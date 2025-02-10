import { combineReducers } from 'redux';

const initialState = {
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;