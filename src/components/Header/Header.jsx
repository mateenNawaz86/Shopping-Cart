import React, { useState } from "react";
import { Badge, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { CartState } from "../../context/Context";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => setShowMenu(!showMenu);

  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
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
                    <Badge>{cart.length}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: 350 }}>
                    {cart.length > 0 ? (
                      <>
                        {cart.map((prod) => (
                          <span className="cart-item" key={prod.id}>
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="cart-item__img"
                            />
                            <div className="cart-item__detail">
                              <span> {prod.name}</span>
                              <span> Rs: {prod.price.split(".")[0]}</span>
                            </div>
                            <FiTrash2
                              fontSize="20px"
                              className="deleteIcon"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: prod,
                                })
                              }
                            />
                          </span>
                        ))}
                      </>
                    ) : (
                      <span style={{ padding: 10 }}>Cart is Empty</span>
                    )}
                    <Link
                      to="/cart"
                      className="btn btn-primary"
                      style={{ width: "95%", margin: "0 10px" }}
                    >
                      Go To Cart
                    </Link>
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
