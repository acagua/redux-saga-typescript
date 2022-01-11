import { types } from '../types/types';


export const fetchMovieRequest = (payload: any)=> ({
    type: types.movieFetchRequest,
    payload
})

export const fetchMovieSuccess = (payload:any) => ({
    type: types.movieFetchSuccess,
    payload
})

export const fetchMovieFailure = (payload:any) => ({
    type: types.movieFetchFailed,
    payload
})

export const fetchDefaultMovie = ():{type:string, payload:number} => ({
    type: types.movieFetchDefaultRequest,
    payload: 10000
})