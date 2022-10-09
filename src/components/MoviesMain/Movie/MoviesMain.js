import React, { useEffect, useState } from 'react'

// Components
import Movie from './Movie'
import ContentHOC from '../../HOC/ContentHOC/ContentHOC'

// Helpers
import axios from 'axios'



const MoviesMain = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchMovies()
    }, [])


    function fetchMovies() {
        axios.get('https://movie-task.vercel.app/api/popular?page=1')
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

    return (
        <ContentHOC loading={loading} error={error}>
            <div class="row">

                {movies.map(movie => (
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <Movie key={movie.id} {...movie} />
                    </div>
                ))}
            </div>
        </ContentHOC>
    )
}

export default MoviesMain