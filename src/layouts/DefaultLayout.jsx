import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoaderComponent from "../components/reviews/LoaderComponent";

export default function DefaultLayout() {


  return (
    <>
      <Header />
      <main className="mb-5">

        <LoaderComponent />

        <Outlet />
      </main>
      <Footer />
    </>
  )
}