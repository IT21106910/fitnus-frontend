import React from "react";
import "./nav.css";
function Nav() {
  return (
    <div>
      <div className="item_nav_bar">
        <div>
          <h1 className="logo">
            Fit<span className="logosub">world</span>
          </h1>
        </div>
        <div className="navitem">
          <div>
            <h3
              className="item_nav"
              onClick={() => (window.location.href = "/addworkout")}
            >
              Add New
            </h3>
          </div>
          <div>
            <h3
              onClick={() => (window.location.href = "/")}
              className="item_nav"
            >
              My Status
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
