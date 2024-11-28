import React from 'react'
import Cards from '../components/Cards';

export default class Rated extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            url: `https://api.themoviedb.org/3/movie/top_rated?language=fr-FR`,
        }
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        fetch(`${this.state.url}${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(myResult => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        movies: myResult.results
                    }
                })
            })
    }

    render() {
        return (
            <div className="page">
                {this.state.movies.map((m, index) =>
                    <Cards key={m.title+index}  movie={m} />
                )}
            </div>)
    }
}