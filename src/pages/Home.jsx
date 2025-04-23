import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import GlobalContext from "../context/GlobalContext"
import { useContext } from "react"

export default function Home() {
  const [movies, setMovies] = useState([])
  const { setIsLoading } = useContext(GlobalContext)

  useEffect(() => {
    setIsLoading(true)

    fetch('http://localhost:3004/api/movies')
      .then(res => res.json())
      .then(data => {
        setMovies(data)
        console.log(data);
      
        setIsLoading(false)
      })
      .catch((err) => console.error('Error fetching movies:', err))
  }, [])

  return (

    <>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Movies reviews</h1>
          <p className="col-md-8 fs-4">
            Explore our collection of iconic movies and their reviews. From timeless classics to modern masterpieces, dive into the world of cinema and discover what makes these films unforgettable.
          </p>
        </div>
      </div>

      <section className="movies">
        <div className="container">

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            {movies.length > 0 ? (


              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
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