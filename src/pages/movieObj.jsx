import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieReviewCard from "../components/movieReviewCard"

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
          <div className="row">
            <div className="col-8 fs-4">
              <h1 className="display-5 fw-bold">{movie?.title}</h1>
              <p className="col-md-8 fs-4">
                {movie?.abstract}
              </p>
            </div>

            <div className="col-4">
              <img src={`http://localhost:3004/cover_image/${movie?.image}`} alt={movie?.title} className="img-fluid rounded" style={{height: '300px'}}/>
            </div>
          </div>


        </div>
      </div>

      <div className="container">
        {movie?.reviews && movie.reviews.length > 0 ? (
          <div>
            <h2>Reviews</h2>

            {movie.reviews.map(review => (
              <MovieReviewCard key={review?.id} userReview={review} />
            ))}
          </div>
        ) : (
          <p>No reviews yet!</p>
        )}
      </div>


    </>
  )
}