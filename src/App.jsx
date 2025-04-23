import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import SingleMoviePage from "./pages/SingleMoviePage"
import NotFound from "./pages/NotFound"
import GlobalContext from "./context/GlobalContext"

export default function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>

              <Route path="/" Component={Home} />
              <Route path="/:id" Component={SingleMoviePage} />

              <Route path="/*" Component={NotFound} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}