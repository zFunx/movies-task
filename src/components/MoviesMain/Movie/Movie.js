import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Movie = props => {
    return (
        <Link to={`/movies/${props.id}`} className="card bg-light h-100 p-cursor text-decoration-none">
            <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} className="card-img-top" alt={props.title} loading="lazy" />
            <div className="card-body">
                <h5 className="card-title text-dark">{props.title}</h5>
                <p className="card-text truncate-3 text-secondary">{props.overview}</p>
            </div>
        </Link>
    )
}

export default Movie

Movie.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string
};