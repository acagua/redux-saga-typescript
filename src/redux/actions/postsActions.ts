import { types } from '../types/types';


export const postFetchRequest = ()=> ({
    type: types.postFetchRequest
})

export const postFetchSuccess = (payload:any) => ({
    type: types.postFetchSuccess,
    payload
})

export const postFetchFailure = (payload:any) => ({
    type: types.postFetchFailure,
    payload
})