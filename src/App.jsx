import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import SingleMoviePage from "./pages/SingleMoviePage"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/:id" Component={SingleMoviePage} />

            <Route path="/*" Component={NotFound} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}