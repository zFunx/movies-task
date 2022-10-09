import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

// Components
import ContentHOC from '../HOC/ContentHOC/ContentHOC';


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
                setData(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Something went wrong while getting the movies', err)
                setLoading(false)
                setError('Something went wrong while getting the movies')
            })
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString("en-US", options)
    }

    function toHoursAndMinutes(totalMinutes) {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);

        return `${hours}h ${padTo2Digits(minutes)}m`;
    }

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    return (
        <ContentHOC loading={loading} error={error}>
            {data && (
                <>
                    <div>
                        <div className="row">
                            <div className="col-auto">
                                <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className="img-fluid rounded img-400h" alt={data.title} />
                            </div>
                            <div className="col-12 d-flex col-md-auto text-white mt-4 mt-md-0">
                                <div className="mt-auto">
                                    <h2 className="text-warning">{data.title}</h2>
                                    {data.status === 'Released' ?
                                        <div>
                                            Released on {formatDate(data.release_date)}
                                        </div>
                                        :
                                        <div>
                                            Not yet released
                                        </div>
                                    }
                                    <div>
                                        {data.vote_average && <span className="me-4"><i className="fa-solid fa-thumbs-up"></i> {data.vote_average.toFixed(2)}</span>}
                                        {data.runtime && <><i className="fa-solid fa-play me-1"></i> {toHoursAndMinutes(data.runtime)}</>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-light mt-4'>
                        {data.overview}
                    </div>
                </>
            )}
        </ContentHOC>
    )
}

export default MoviePage