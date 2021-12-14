import React from "react";
import { Link } from "react-router-dom";

// simple react snippets: sfc - A stateless funcitonal component

const Navbar = () => {
  const linkEmplyees = "/employees";
  const linkPerson = "/person";
  const linkHooks = "/hooksPractice";
  const linkStyling = "/styling";
  const linkForms = "/formsSubmit";
  const linkSignIn = "/signIn";


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
              <Link className="nav-link" to={linkEmplyees}>Buttons/Intro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={linkPerson}>Prop Types</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={linkHooks}>Hooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={linkStyling}>Styling</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={linkForms}>Forms Submit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={linkSignIn}>Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/popups">Pop-Ups/Api</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  );
}

export default Navbar;
