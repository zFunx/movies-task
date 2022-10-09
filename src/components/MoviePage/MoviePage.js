import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


const MoviePage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchMovie()
    }, [])

    function fetchMovie() {
        axios.get(`https://movie-task.vercel.app/api/movie?movieId=${id}`)
            .then(res => {
                setData(res.data.data.results)
                setLoading(false)
            })
            .catch(err => {
                console.error('Something went wrong while getting the movies', err)
                setLoading(false)
                setError('Something went wrong while getting the movies')
            })
    }

    return (
        <div>MoviePage</div>
    )
}

export default MoviePage