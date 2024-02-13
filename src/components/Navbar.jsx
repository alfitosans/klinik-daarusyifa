import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import CarevulLogo from "../assets/carevul-logo.svg";
import "./../styles/Navbar.css";
import { Container, Button, Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function BasicExample() {
  const isLoggedIn = JSON.parse(localStorage.getItem("idUser")); // // true or false

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("idUser");
    window.location.reload();
  };

  let component = "";
  if (isLoggedIn) {
    component = (
      <>
        <div className="text-center">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Account&nbsp;</Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="text-center mx-4">
                <img
                  height={50}
                  className="text-center justify-center"
                  src={isLoggedIn.img}
                />

                <h5 className="ms-auto text-center">{isLoggedIn.name}</h5>

                <Button
                  onClick={handleLogout}
                  // onClick={window.localStorage.clear()}
                  className="logindong text-white text-carevul border-carevul py-2"
                >
                  Logout
                </Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </>
    );
  } else {
    component = (
      <>
        <div className="text-center ">
          <NavLink
            to={"/login"}
            className="logindong btn text-carevul border-carevul m-1"
          >
            Login
          </NavLink>
          <NavLink
            to={"/regis"}
            className="btn color-carevul-gradient text-white m-1"
          >
            Register
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container className="mx-auto">
        <Navbar.Brand href="#">
          {" "}
          <div className="logoApp" onClick={() => navigate("/")}>
            <img width={60} src={CarevulLogo} alt="Carevul Logo" />{" "}
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/consult/category"} className="nav-link ">
              Konsultasi
            </NavLink>
          </Nav>
          <Nav className="ms-auto gap-1">{component}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
