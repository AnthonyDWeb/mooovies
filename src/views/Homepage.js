import React from 'react'
import Cards from '../components/Cards';


export default class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        fetch(`${process.env.REACT_APP_UPCOMING_URL}${process.env.REACT_APP_TMDB_API_KEY}`)
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
                {this.state.movies?.map((m, index) =>
                    <Cards  key={index} movie={m} />
                )}
            </div>)
    }
}
