// this is where we connect all of our reducers or any middleware
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectListReducer } from './reducers/projectReducers.js';


const reducer = combineReducers({
    projectList: projectListReducer
});

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;