import React from 'react';
import { Link } from "react-router-dom";

class Cards extends React.Component {

    render() {
        const mAlt = `Affiche du film: ${this.props.movie.title}`;
        const poster = `${process.env.REACT_APP_BASE_IMG_URL}${this.props.movie.poster_path}`;
        return (
            <div className="card">
                <img className="card-img" src={poster} alt={mAlt} />
                <Link className='card-information' to={`/movie/${this.props.movie.id}`}>
                    <p className='card-information-release'>{this.props.movie.release_date}</p>
                    <p className='card-information-synopsis-container'>
                        <span className='card-information-synopsis-label'>Synopsis</span>
                        <span className='card-information-synopsis-description'>{this.props.movie.overview}</span>
                    </p>
                    {/* </div> */}
                </Link>
            </div>)
    }
}

export default Cards;