import React from 'react';
import unknown from "../assets/unknown.png";

export default class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            movie: {},
            credits: [],
        }
    }

    componentDidMount() {
        this.getMovie();
        this.getMovieCredits();
    }

    getMovie = () => {
        const pathname = window.location.pathname;
        const url = `https://api.themoviedb.org/3${pathname}${process.env.REACT_APP_TMDB_API_KEY}`;
        console.log("url", url);
        fetch(`https://api.themoviedb.org/3${pathname}${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(d => {
                console.log("movie", d);
                this.setState(prevState => {
                    return {
                        ...prevState,
                        movie: d
                    }
                })
            })
    }
    getMovieCredits = () => {
        const pathname = window.location.pathname;
        fetch(`https://api.themoviedb.org/3${pathname}/credits${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(c => {
                console.log("movie credits", c);
                this.setState(prevState => {
                    return {
                        ...prevState,
                        credits: c
                    }
                })
            })
    }



    render() {
        const mAlt = `Affiche du film: ${this.state.movie.title}`;
        const mAlt2 = `Affiche alternative du film: ${this.state.movie.title}`;
        const poster = `${process.env.REACT_APP_BASE_IMG_URL}${this.state.movie.poster_path}`;
        const background = `${process.env.REACT_APP_BASE_IMG_URL}${this.state.movie.backdrop_path}`;
        const casting = this.state.credits.cast;
        const error = (e) => {
            e.target.src = unknown;
            e.onError = null;
        }
        return (
            <div className="page detail">
                <div className="detail-card-poster">
                    <img className="detail-backdrop" src={background} alt={mAlt} />
                    <img className="detail-poster" src={poster} alt={mAlt2} />
                    <div className="detail-card">
                        <h2 className="detail-card-title">{this.state.movie.title}</h2>
                        <h4 className="detail-card-title-actors">Casting</h4>
                        <div className="detail-card-actors">
                            {casting?.map(cast => {
                                const castProfil = `${process.env.REACT_APP_BASE_IMG_URL}${cast.profile_path}`;
                                const character = cast.character && cast.character !== "" ? cast.character : "?";
                                return (
                                    <div className="detail-card-actor" key={cast.id}>
                                        <img className="detail-card-actor-img" src={castProfil} alt={cast.name} onError={e => error(e)} />
                                        {cast.name === "Tom Hardy"
                                            ? <p className="detail-card-actor-name">{cast.character}</p>
                                            : <p className="detail-card-actor-name">
                                                <span>{cast.name}</span>
                                                <span>({character})</span>
                                            </p>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>)
    }
}