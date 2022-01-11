import axios from 'axios';
import { call, put, take, delay, select } from 'redux-saga/effects';
import { types } from '../types/types';
import { fetchMovieSuccess, fetchMovieFailure, fetchDefaultMovie } from '../actions/movieActions';
import { RootState } from '../reducers/index';
import { getMovie } from './selectors';

const getRandomMovie = (id:number) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=568699049fed8a873ba35793237f5b4e`)
} 

function* movieFetchRequestSaga(id: number):any{
    try{
        yield delay(5000);
        const {data} = yield call(()=>getRandomMovie(id));
        console.log('data received succesfully');
        yield put (
            fetchMovieSuccess({
                    movie:
                    {
                        title: data.title,
                        description: data.overview,
                        imageUrl:data.poster_path,
                        rating:data.vote_average
                    }
                }
            )
        )
    } catch(err: any){
        console.log('erroooo', err)
        yield put (
            fetchMovieFailure({
                error: `Sorry, ID ${id} does not exist in DB`
            })
        )
    }
}


function* movieSaga(): Generator<any> {
    while(true){
        console.log('take is listening...');
        // const {payload}: any = yield take(types.movieFetchRequest); // yield take(types.movieFetchRequest);
        const {payload}: any = yield take('*'); // yield take(types.movieFetchRequest);
        console.log(payload);
        console.log(`take received movie id ${payload}`);
        yield movieFetchRequestSaga(payload as number);
        console.log('Movie Fetch finished')
        //const {movie}:any = yield select( (state:any) => state.movie);
        // const {details}:any = yield select( (state:RootState) => state.movie)
        const { details }:any = yield select(getMovie)
        console.log('Movie Details', details);
    }
}

export function* movieSagaOnInit() {
    yield put(fetchDefaultMovie());
}

export default movieSaga;