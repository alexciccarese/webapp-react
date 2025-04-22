import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieReviewcard from "../components/MovieReviewCard"

export default function movieObj() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3004/api/movies/` + id)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovie(data)
      })
      .catch((err) => console.error('Error fetching movie:', err))
  }, [id])

  return (

    <>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">{movie?.title}</h1>
          <p className="col-md-8 fs-4">
            {movie?.abstract}
          </p>

        </div>
      </div>

      <div className="container">
        {movie?.reviews && movie.reviews.length > 0 ? (
          <div>
            <h2>Reviews</h2>

            {movie.reviews.map(review => (
              <MovieReviewcard key={review?.id} userReview={review} />
            ))}
          </div>
        ) : (
          <p>No reviews yet!</p>
        )}
      </div>


    </>
  )
}