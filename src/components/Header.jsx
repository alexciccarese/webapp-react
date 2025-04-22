export default function Header() {

  return (
    <>
      <header className="bg-light">
        <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="#" aria-current="page">Home<span className="visually-hidden">(current)</span></a>
            <a className="nav-item nav-link" href="#">Movies</a>
          </div>
        </nav>
        </div>
      </header>
    </>
  )
}