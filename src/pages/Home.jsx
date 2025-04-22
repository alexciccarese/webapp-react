import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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


  const imageMap = {
    'The Matrix': 'matrix.jpg',
    'Inception': 'inception.jpg',
    'Interstellar': 'interstellar.jpg',
    'The good father': 'the_goodfather.jpg',
    'titanic': 'titanic.jpg',
  }

  return (

    <>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Movies reviews</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sit neque ad repudiandae incidunt dolor inventore 
            illum soluta, obcaecati deleniti id pariatur cumque, minima quos aliquam voluptatum iste libero.
          </p>
        </div>
      </div>

      <section className="movies">
        <div className="container">
          <h1>Home page</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            {movies.length > 0 ? (


              movies.map((movie) => (
                <div key={movie.id} className="col">
                  <div className="card">
                    <Link to={`/${movie.id}`}>
                      <div className="card-body">
                        <img src={`http://localhost:3004/cover_image/${movie.image}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.release_year}</p>
                      </div>
                    </Link>
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