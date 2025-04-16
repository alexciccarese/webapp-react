import { useState, useEffect } from "react"

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/api/movies')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data)
      })
      .catch((err) => console.error('Error fetching movies:', err))
  }, [])

  return (

    <>
      <h1>Home page</h1>

      <section className="movies">
        <div className="container">
          <div className="row">

            {movies.length > 0 ? (

              
                movies.map((movie) => (
                  <div key={movie.id} className="col">
                    <div className="card">
                      <img src={movie.image} alt={movie.title} />
                      <h3>{movie.title}</h3>
                      <p>{movie.release_year}</p>
                    </div>
                  </div>
                ))
              
            ) : (
              <p>No movies available.</p>
            )}

          </div>
        </div>
      </section >
    </>
  )
}