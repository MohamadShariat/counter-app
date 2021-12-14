import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
