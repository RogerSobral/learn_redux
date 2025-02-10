export const fetchItems = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({ type: 'FETCH_ITEMS', payload: data });
  };