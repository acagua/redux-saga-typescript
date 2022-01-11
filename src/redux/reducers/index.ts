import {combineReducers} from 'redux'
// import postReducer from './postReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    // posts: postReducer,
    movie: movieReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;