import React from "react";

import { shortenAddress } from "../utils/index";

const Header = ({ address, connect }) => {

  const menu = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "How It Works",
      link: "#howworks",
    },
    {
      name: "Q&A",
      link: "#question",
    },
    {
      name: "Blog",
      link: "#blog",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]
  return (
    <div className="mein-menu">
      <nav className="navbar navbar-expand-lg
      navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src="assets/img/logo.png" alt="swap" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"
            id="navbarNavDropdown"
          >

            <ul className="navbar-nav">
              {menu.map((item, index) => (
                <li key={item.name} className="nav-item">
                  <a href={item.link} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
              {
                address ? (
                  <button className="new_button">
                    {shortenAddress(address )}
                  </button>
                ) : (
                  <button onClick={() => connect()}
                    className="new_button"
                  >
                    Connect
                  </button>
                )}
            </ul>
          </div>
        </div>
      </nav>
    </div>


  )
};

export default Header;
