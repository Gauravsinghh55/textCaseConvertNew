import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} container`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">{props.heading}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Join us</a>
              </li>
            </ul>
            <div className="form-check form-switch mx-2">
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggle} />
                <label className="form-check-label" htmlFor="switchCheckDefault"></label>
              </div>
          </div>
        </div>
      </nav>

    </>
  )
}
