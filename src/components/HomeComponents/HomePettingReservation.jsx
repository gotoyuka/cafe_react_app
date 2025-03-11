import { Button, Row, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import wasabi from "../../img/wasabi.png";
import "../../style.css";

const HomePettingReservation = () => {
  const navigate = useNavigate();


  return (
    <>
      <h2 className="text-center shippori-bold fs-2 mt-5 mb-3">
        Petting Reservation
      </h2>

      <Container className="shippori w-75">
        <Row xs={1} md={2} className="d-flex justify-content-center ">
          <Col xs={7} md={6} lg={5} className="d-flex ">
            <img src={wasabi} alt="Wasabi-photo" className="img-fluid " />
          </Col>

          <Col className="d-flex flex-column justify-content-center text-left ">
            <p className="fs-8 text-break">
              Cafe Chilla’sの店長<strong>わさび</strong>です<br />
              店内にはほかにも個性豊かなチンチラの仲間たちがいて、みんなと一緒にお迎えします！<br />
              チンチラは夜行性なので、 16:00 〜 19:00 の時間限定でゆったりとふれあうことができます。<br />
              営業カレンダーに記載されている 「ふれあい可能日」のみのご案内となりますので、<br />ご来店の際はカレンダーをご確認ください。
            </p>
          </Col>
        </Row>
        <Button
          variant="outline-dark"
          className="d-block mx-auto mb-3 "
          onClick={() => navigate("/petting_reservation")}
        >
          ご予約はこちら
        </Button>
      </Container>
    </>
  );
};

export default HomePettingReservation;
