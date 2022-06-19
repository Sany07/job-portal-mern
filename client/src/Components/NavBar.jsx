import React from 'react';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" alt="MDB Logo" loading="lazy" style={{marginTop: '-1px'}} height={16} />
          </a>
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        {/* Navbar dropdown */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          {/* Dropdown menu */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-plus-circle pe-2" />Post</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-bell pe-2" />Alerts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-heart pe-2" />Trips</a>
        </li>
        <li className="nav-item ms-3">
          <a className="btn btn-black btn-rounded" href="#!">Sign in</a>
        </li>


            </ul>

            <ul className="navbar-nav ">
              <li className="nav-item me-3 me-lg-1">
                <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle" alt="Black and White Portrait of a Man" loading="lazy" height={22} />
                  <strong className="d-none d-sm-block ms-1">John</strong>
                </a>
              </li>

              <li className="nav-item dropdown me-3 me-lg-1">
                <a className="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-comments fa-lg" />
                  <span className="badge rounded-pill badge-notification bg-danger">6</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item  me-3 me-lg-1">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              </li>
              <li className="nav-item  me-3 me-lg-1">
              <button type="button" className="btn btn-primary me-3">
                Sign up 
              </button>
              </li>
            </ul>

          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
    );
};

export default NavBar;