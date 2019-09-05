import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { isAuthenticated } from "../auth/index";

function Navbar(props) {
  const SignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }

    props.history.push("/");
  };
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              LMS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                {!isAuthenticated() && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      SignIn
                    </Link>
                  </li>
                )}
                {isAuthenticated() && (
                  <Fragment>
                    <li
                      className="nav-item"
                      style={{
                        color: "white"
                       
                      }}
                    >
                      <i
                        className="fas fa-user-circle"
                        style={{ marginRight: "7px" }}
                      >
                        {" "}
                      </i>
                      {isAuthenticated().name}
                    </li>
                    <li className="nav-item">
                      <span
                        className="nav-link"
                        onClick={SignOut}
                        style={{ cursor: "pointer" }}
                      >
                        SignOut
                      </span>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default withRouter(Navbar);
