import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImg from "../img/logo.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <div className="footer-bg d-flex">
      <Container className="py-3">
        <Row className="align-items-center">
          
            <Col xs={12} md={3} >
              <Navbar.Brand href="/" className="d-flex align-items-center justify-content-center justify-content-md-start">
                <img
                  src={LogoImg}
                  alt="logo"
                  style={{ width: "75px", height: "auto" }}
                />
                Cafe Chilla&apos;s
              </Navbar.Brand>
            </Col>
            

            

            <Col xs={12} md={8} className="ms-auto">
              <Nav className="d-flex justify-content-center justify-content-md-end">
                <Nav.Link href="/" className="text-dark ">Home</Nav.Link>
                <Nav.Link href="/menu" className="text-dark">Menu</Nav.Link>
                <Nav.Link href="/petting_reservation" className="text-dark">Reserve</Nav.Link>
                <Nav.Link href="/other" className="text-dark">About</Nav.Link>
                <Nav.Link href="/admin" className="text-dark">管理者ページ</Nav.Link>
              </Nav>
            </Col>
            </Row>
          
      </Container>
    </div>
  );
};

export default Footer;
