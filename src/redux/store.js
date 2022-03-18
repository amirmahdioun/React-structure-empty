import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

//TODO: import reducers here
//reducers

const reducers = combineReducers(
    {

    }
)

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))