import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import MovieReviewForm from "../components/reviews/MovieReviewForm"
import MovieReviewCard from "../components/MovieReviewCard"

export default function SingleMoviePage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3004/api/movies/` + id)
      .then(res => res.json())
      .then(data => {

        if (data?.error) {
          navigate('/404')
        }
        setMovie(data)
      })
      .catch((err) => console.error('Error fetching movie:', err))
  }, [id])

  return (

    <>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-8 fs-4">
              <h1 className="display-5 fw-bold">{movie?.title}</h1>
              <p className="col-md-8 fs-4">
                {movie?.abstract}
              </p>
            </div>

            <div className="col-4">
              <img src={movie?.image ? `http://localhost:3004/cover_image/${movie.image}` : "https://placehold.co/600x400"} alt={movie?.title} className="img-fluid rounded" style={{ height: '300px' }} />
            </div>
          </div>


        </div>
      </div>

      <div className="container">

        <MovieReviewForm movieId={id} />
      </div>

      <hr />



      {movie?.reviews && movie.reviews.length > 0 ? (
        <div>

          {movie.reviews.map(review => (
            <MovieReviewCard key={review.id} userReview={review} />
          ))}
        </div>
      ) : (
        <p>No reviews yet!</p>
      )}


    </>
  )
}