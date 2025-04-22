import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <>
      <header className="bg-light">
        <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </div>
        </nav>
        </div>
      </header>
    </>
  )
}