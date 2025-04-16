import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" element={<h1>Hello world!</h1>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}