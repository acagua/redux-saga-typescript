import {all, fork} from 'redux-saga/effects';
import movieSaga from './movieSaga';
import { movieSagaOnInit } from './movieSaga';

export function* rootSaga():any {
    yield all ([fork(movieSaga), fork(movieSagaOnInit)])

}

export default rootSaga;