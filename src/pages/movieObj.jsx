import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function movieObj() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3004/api/movies/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovie(data)
      })
      .catch((err) => console.error('Error fetching movie:', err))
  }, [id])

  return (
    <>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={`http://localhost:3004/cover_image/${movie.image}`} alt={movie.title} />
          <p>{movie.release_year}</p>
          <p>{movie.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}