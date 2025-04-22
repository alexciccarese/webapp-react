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
              <img src={`http://localhost:3004/cover_image/${movie?.image}`} alt={movie?.title} className="img-fluid rounded" style={{ height: '300px' }} />
            </div>
          </div>


        </div>
      </div>

      <div className="container">

        <div className="add-review">
          <h3 className="mb-3">Add your review</h3>
          <form action="POST" className="mb-3">

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="anonymous"
              />
            </div>


            <div className="mb-3">
              <label htmlFor="vote" className="form-label">Vote</label>
              <input
                type="number"
                className="form-control"
                name="vote"
                id="vote"
                min={1}
                max={5}
                aria-describedby="helpId"
                placeholder="1"
              />
            </div>


            <div className="mb-3">
              <label htmlFor="review" className="form-label">Review</label>
              <textarea name="review" className="form-control" rows="3" placeholder="Write your review here"></textarea>
            </div>

            <div className="bm-3">
              <button type="submit" className="btn btn-primary mt-2">Submit review</button>
            </div>

          </form>
        </div>

        <hr />


        <h3 className="mb-3">Reviews</h3>
        {movie?.reviews && movie.reviews.length > 0 ? (
          <div>

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