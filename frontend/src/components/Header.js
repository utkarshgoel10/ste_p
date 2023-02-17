import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";
import logo from '../assets/img/logo2.png';

function Header({ setSearch }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="dark"
      style={{ border: "none" }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="unbounded"
          style={{ fontSize: "2rem" }}
        >
          <img src={logo} alt="logo" className="logo" />
          {/* Salaah. */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            {userInfo ? (
              <>
                <Nav.Link href="/mystudents">My Students</Nav.Link>
                <Nav.Link href="/studentreport">Report</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"                                                   
                >
                  <NavDropdown.Item href="/profile">
                    <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    />
                    <p className="text-white">My Profile</p>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler} className='text-white'>
                    <p className="text-white">Logout</p>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <div className="landing-nav">
                <Link to="/about" className="unbounded">
                About
              </Link>
              <Link to="/login" className="unbounded">
                Login
              </Link>
              <Link to="/register" className="unbounded">
              SignUp
            </Link>
            </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
