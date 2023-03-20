import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
}

const rootReducer = combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
    routing: routerReducer,
    form: formReducer
});



export default persistReducer(persistConfig, rootReducer)

// export default rootReducer

