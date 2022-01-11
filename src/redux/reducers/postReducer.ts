import { types } from '../types/types';


const initialState = {
    pending: false,
    posts: [],
    error: null
}
const postReducer = (state = initialState, action: any) => {
    switch(action.type){
        case types.postFetchRequest: 
            return  {
                ...state,
                pending: true,
            }
        case types.postFetchSuccess: 
            return  {
                ...state,
                pending: false,
                posts: action.payload.posts,
                error:null, 
            }
        case types.postFetchFailure: 
            return  {
                ...state,
                pending: false,
                posts: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
}

export default postReducer;