import {types} from '../types/types'

interface FetchMovieState {
    loading: boolean,
    error: string,
    details:Movie | null
}

interface Movie {
    title: string,
    description: string,
    imageUrl: string,
    rating:number
}
const initialState: FetchMovieState = {
    loading: false,
    error: '',
    details: null
} 

const movieReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.movieFetchRequest:
            return{
                ...state,
                loading: true
            }
        case types.movieFetchDefaultRequest:
            return{
                ...state,
                loading: true
            }
        case types.movieFetchSuccess:
            return{
                ...state,
                loading: false,
                error: '',
                details: action.payload.movie

            }
        case types.movieFetchFailed:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return{
                ...state
            }
    }
}

export default movieReducer;