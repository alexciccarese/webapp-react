import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import movieObj from "./pages/movieObj"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/:id" Component={movieObj} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}