import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";
import promise from "redux-promise-middleware";


const initialState = {};

const middleware = [thunk, promise];


export const store = createStore(
    rootReducer, 
    initialState,   
    compose(
    applyMiddleware(...middleware), 

    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
));

export const persistor = persistStore(store);

export default { store, persistor};