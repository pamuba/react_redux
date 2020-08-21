import { createStore, applyMiddleware } from 'redux'
// import cakeReducer from './cake/cakeReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store