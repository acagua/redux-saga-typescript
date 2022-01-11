import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import { fetchMovieRequest } from './redux/actions/movieActions';
import { randomNumber } from './utils/random';

const TakeEffect = () => {

    const dispatch = useDispatch();
    const {loading, details, error} = useSelector((state:RootState)=> state.movie);

    const fetchRandomMovie = () => {
        const movieId:number = randomNumber(1000)
        dispatch(fetchMovieRequest(movieId))
    }
    return (
        <>

            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : 
                    (
                        details && (
                            <>
                                <h1 className="title">
                                    {details.title}
                                </h1>
                                <h2 className="description">
                                    {details.description}
                                </h2>
                                <div >
                                    <img className="image-poster" src={'http://image.tmdb.org/t/p/w500'+details.imageUrl}  alt='Movie Poster'/>
                                </div>
                            </>
                        )

                    )
                }
            </div>
            <button
                onClick={fetchRandomMovie}
            >
                Random Movie
            </button>
        </>
    )
}

export default TakeEffect;