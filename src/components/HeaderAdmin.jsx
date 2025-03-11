import { Link } from "react-router-dom";
import logoimg from "../img/logo.png";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";

function HeaderAdmin() {
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
              <Nav.Link href="/admin_schedule" className="text-dark">営業日管理</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/admin_reservations" className="text-dark">予約確認</Nav.Link>
            </Nav.Item>
          </Nav>

        </div>
        </Container>
      </header>
    </>
  );
}

export default HeaderAdmin;
