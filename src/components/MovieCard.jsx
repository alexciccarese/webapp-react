import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {

  const { id, image, title, release_year } = movie

  return (

    <>
      <div className="col">
        <div className="card h-100">
          <Link to={`/${id}`}>
            <img src={`http://localhost:3004/cover_image/${image}`} alt={title} className="card-img-top" />
          </Link>
          <div className="card-body ">
            <h3>{title}</h3>
            <p>{release_year}</p>
          </div>
        </div>
      </div>
    </>
  )
}