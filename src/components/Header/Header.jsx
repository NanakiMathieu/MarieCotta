import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Logo from '../../assets/images/Logo.png';
import './Header.css';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="header__sticky">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/" className="app__Links__logo">
            <img src={Logo} alt="logo marie cotta" />
          </Link>
        </div>
        <ul className="app__navbar-links">
          <li>
            <Link to="/" className="app__Links">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/concept" className="app__Links">
              Concept
            </Link>
          </li>
          <li>
            <Link to="/menu" className="app__Links">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/event" className="app__Links">
              Evénements
            </Link>
          </li>
          <li>
            <Link to="/contact" className="app__Links__contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bot">
              <MdOutlineRestaurantMenu
                fontSize={27}
                color="fff"
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen-links">
                <li>
                  <Link
                    to="/"
                    className="app__Links"
                    onClick={() => setToggleMenu(false)}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/concept"
                    className="app__Links"
                    onClick={() => setToggleMenu(false)}
                  >
                    Concept
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className="app__Links"
                    onClick={() => setToggleMenu(false)}
                  >
                    Déjeuner
                  </Link>
                </li>
                <li>
                  <Link
                    to="/event"
                    className="app__Links"
                    onClick={() => setToggleMenu(false)}
                  >
                    Evénements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="app__Links"
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
