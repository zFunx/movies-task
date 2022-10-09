import { useEffect, useState, useContext } from 'react'

// Components
import Movie from './Movie/Movie'
import ContentHOC from '../HOC/ContentHOC/ContentHOC'

// Helpers
import axios from 'axios'

// Context
import AppContext from "../../context/AppContext";

const MoviesMain = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const { selectedYr } = useContext(AppContext);


    useEffect(() => {
        fetchMovies()
    }, [])

    function fetchMovies() {
        axios.get('https://movie-task.vercel.app/api/popular?page=1&&count=100')
            .then(res => {
                setMovies(res.data.data.results)
                setLoading(false)
            })
            .catch(err => {
                console.error('Something went wrong while getting the movies', err)
                setLoading(false)
                setError('Something went wrong while getting the movies')
            })
    }

    function filteredMovies() {
        let filteredMovies = [...movies]

        if (selectedYr) {
            filteredMovies = filteredMovies.filter(movie => {
                if (selectedYr) {
                    const yr = new Date(movie.release_date).getFullYear();
                    return yr == selectedYr
                } else {
                    return true
                }
            })
        }

        if(filteredMovies.length == 0){
            return <div className="my-5 fs-3 text-center text-white">No movies found</div>
        }

        filteredMovies = filteredMovies.map(movie => (
            <div key={movie.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <Movie  {...movie} />
            </div>
        ))

        return filteredMovies
    }

    return (
        <ContentHOC loading={loading} error={error}>
            <div className="row">
                {filteredMovies()}
            </div>
        </ContentHOC>
    )
}

export default MoviesMain