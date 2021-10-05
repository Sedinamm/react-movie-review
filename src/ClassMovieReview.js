import React from 'react'


class MovieReview extends React.Component {
    constructor() {
        super()
        this.state = { movies: [], term: "everything"};
    }

    async getMovies() {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?
        query=${this.state.term}&api-key=R4eWZjgAcCjUrkRGJZ08KZ1UKxr0oDa8`)
        .then((response) => {
            return response.json();
           
          })
        .then((movies) => {
            this.setState({movies: movies.results});
        });  
    }

    componentDidMount(){
        this.getMovies();
    }

    

    render(){
        return(
            <>
            <nav className="classNav">ClassMovieReview</nav>
              {this.state.movies.map((movie, index) => {
                  const {byline , critics_pick, display_title, headline}= movie
                  return(
                      <div key={index} className="results">
                            <>
                            <h2>Byline</h2>
                        <span>{byline}</span>
                                <br/>
                                <h2>Critics_pick</h2>
                        <span>{critics_pick}</span>
                                <br/>
                                <h2>Display_title</h2>
                        <span>{display_title}</span>
                                <br/>
                                <h2>Headline</h2>
                        <span>{headline}</span>
                        <hr/>
                                </>
                      </div>
                  )
              })}
            </>
        )
    }
}

export default MovieReview;