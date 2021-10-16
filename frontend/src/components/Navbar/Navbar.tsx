import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2>Products</h2>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/new-product">
                Create new Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
