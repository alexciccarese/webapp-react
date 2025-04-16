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

  }, [])

  return (

    <>
      <h1>Home page</h1>
    </>
  )
}