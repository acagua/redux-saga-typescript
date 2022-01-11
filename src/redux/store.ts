import { createStore, applyMiddleware/*, compose*/ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

export default store;