import { Link } from "react-router-dom";
import logoimg from "../img/logo.png";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <header className="pt-3">
        <Container>
          <img
            src={logoimg}
            alt="logo"
            className="rounded mx-auto d-block "
            style={{ width: "100px", height: "auto" }}
          />
          <Link to="/" className="text-decoration-none">
            <h3 className="shop-title text-center">Cafe Chilla&apos;s</h3>
          </Link>
        <div className="d-flex justify-content-center shippori">          
          <Nav variant="tabs " >
            <Nav.Item>
              <Nav.Link href="/" className="text-dark">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/menu" className="text-dark">Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/petting_reservation" className="text-dark">Reserve</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/other" className="text-dark">About</Nav.Link>
            </Nav.Item>
          </Nav>

        </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
