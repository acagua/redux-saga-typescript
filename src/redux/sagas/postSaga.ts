import axios from 'axios';
import { all, call, put, takeLatest, delay } from 'redux-saga/effects';
import { postFetchSuccess,postFetchFailure } from '../actions/postsActions';
import { types } from '../types/types';


const getPosts = () => (
  axios.get('https://jsonplaceholder.typicode.com/todos')
)

function* postsFetchRequestSaga():any{
    try{
        yield delay(5000);
        const response = yield call(getPosts);
        yield put (
            postFetchSuccess({
                posts:response.data
            })
        )
    } catch(err: any){
        yield put (
            postFetchFailure({
                error: err.message
            })
        )
    }
}

function* postsSaga() {
    yield all([takeLatest(types.postFetchRequest, postsFetchRequestSaga)])
}

export default postsSaga;