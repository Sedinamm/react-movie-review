import React, {useEffect, useState} from 'react'
import axios from 'axios'     

function FMovieReview() {
    const [movies, setMovies]= useState([]);
    const[term]= useState("everything");

    async function getMovies(){
        const response = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?
        query=${term}&api-key=R4eWZjgAcCjUrkRGJZ08KZ1UKxr0oDa8`);

        setMovies(response.data.results)
    }

    useEffect(()=> {
        getMovies();
        return() => {
            setMovies([])
        };
    }, []);

    return(
        <>
        <nav className="funcNav">FunctionMovieReview</nav>
         {
             movies.map((movie, index) => {
                 return(
                     <div key={index} className="F-results">
                         <h2>Byline</h2>
                         <span>{movie.byline}</span>
                         <h2>Critics_pick</h2>
                         <span>{movie.critics_pick}</span>
                         <h2>Display_title</h2>
                         <span>{movie.display_title}</span>
                         <h2>Headline</h2>
                         <span>{movie.headline}</span>
                         <hr/>
                     </div>
                 )
             })
         }
        </>
    )
}

export default FMovieReview;