import React from 'react'
import PropTypes from 'prop-types';

const Movie = props => {
    return (
        <div class="card bg-light h-100 p-cursor">
            <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} class="card-img-top" alt={props.title} loading="lazy" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text truncate-3">{props.overview}</p>
            </div>
        </div>
    )
}

export default Movie

Movie.propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string
};