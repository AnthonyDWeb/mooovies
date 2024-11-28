import React from 'react'
import moment from 'moment'
import Cards from '../components/Cards';


const today = moment().format('LL');
const lastWeek = moment().subtract(7, 'days').format('LL');

export default class Weekly extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            url: `?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}/>}`,
        }
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}${this.state.url}${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(myResult => {
                console.log("données recus =>", myResult.results)
                this.setState(prevState => {
                    return {
                        ...prevState,
                        movies: myResult.results
                    }
                })
            })
    }

    render() {
        console.log("this.state.movies",this.state.movies);
        return (
            <div className="page">
                {this.state.movies.map((m, index) =>
                    <Cards key={m.title+index} movie={m} />
                )}
            </div>)
    }
}
