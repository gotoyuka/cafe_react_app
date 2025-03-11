import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImg from "../img/logo.png";

const Footer = () => {
  return (
    <div className="footer-bg">
      <Navbar >
        <Container className="">
          <Navbar.Brand href="/">
            <img
              src={LogoImg}
              alt="logo"
              
              style={{ width: "75px", height: "auto" }}
            />
            Cafe Chilla&apos;s
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/petting_reservation">Reserve</Nav.Link>
            <Nav.Link href="/other">About</Nav.Link>
            <Nav.Link href="/admin">管理者ページ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
