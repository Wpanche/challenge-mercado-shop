import { createStore } from 'redux';


const initialState = {
    products: {
        categories: []
    }
}
const reducerArticleStore = (state = initialState, action) => {


    if (action.type == "GET_ITEMS_SEARCH") {


        return {
            ...state,
            products: action.items
        }


    }
    return state;
}

export default createStore(reducerArticleStore)