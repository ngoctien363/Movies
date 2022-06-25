import React, { useState } from "react";

const MovieList = ({movies}) => {
    // eslint-disable-next-line no-unused-vars
    const [urlPath, setUrlPath] = useState('https://image.tmdb.org/t/p/original')
    
    return (
        <React.Fragment>
            {movies.map((movie, index) => 
                (<div key={index} className='image-container d-flex justify-content-start m-3'>
                <img width="20%" src={urlPath + movie.poster_path} alt="movies"></img>
            </div>)
            )}
        </React.Fragment>
    )
}
export default MovieList