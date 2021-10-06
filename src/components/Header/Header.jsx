import React, { useState } from "react";
import { Badge, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-success" to="/">
            Save Mart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              onClick={menuHandler}
              className={showMenu ? "fas fa-times" : "fas fa-bars"}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                ></Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Nav>
                <Dropdown alignRight>
                  <Dropdown.Toggle variant="success">
                    <FiShoppingCart color="white" fontSize="22px" />
                    <Badge>{8}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: 350 }}>
                    <span style={{ padding: 10 }}>Cart is Empty</span>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
