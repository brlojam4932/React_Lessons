import React from "react";
import { Link } from "react-router-dom";

// simple react snippets: sfc - A stateless funcitonal component

const Navbar = () => {
  const link = "/employees";
  const link2 = "/person";
  const link3 = "/hooksPractice";
  const link4 = "/formsSubmit";
  const link5 = "/SignIn";
  const link6 = "/popups";
  return (
    //return a template

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employees">Buttons/Intro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={link2}>Prop Types</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={link3}>Hooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={link4}>Forms Submit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={link5}>Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={link6}>Pop-Ups</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href={link} role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={link}>Action</a>
                <a className="dropdown-item" href={link}>Another action</a>
                <a className="dropdown-item" href={link}>Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href={link}>Separated link</a>
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>



  );
}

export default Navbar;
