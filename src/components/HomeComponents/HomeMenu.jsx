import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../../style.css";

import DrinkImg1 from "../../img/menu/dr-1.png";
import DrinkImg2 from "../../img/menu/dr-2.png";
import DrinkImg3 from "../../img/menu/dr-3.png";
import DrinkImg4 from "../../img/menu/dr-4.png";
import DrinkImg5 from "../../img/menu/dr-5.png";
import DrinkImg6 from "../../img/menu/dr-6.png";
import FoodImg1 from "../../img/menu/fd-1.png";
import FoodImg2 from "../../img/menu/fd-2.png";
import FoodImg3 from "../../img/menu/fd-3.png";
import FoodImg4 from "../../img/menu/fd-4.png";
import FoodImg5 from "../../img/menu/fd-5.png";

const drinkMenu = [
  {
    img: DrinkImg1,
    title: "ブレンドChilla'sコーヒー",
    text: "店長が厳選したコーヒー豆を\n絶妙な比率で組み合わせた\n当店オリジナルのコーヒーです",
  },
  {
    img: DrinkImg2,
    title: "Chilla'sラテ",
    text: "濃厚なエスプレッソとスチームミルクが織りなす\nクリーミーで優しい味わい\n店長の気分次第でラテアートも楽しめます",
  },
  {
    img: DrinkImg3,
    title: "Chilla'sティー",
    text: "香り高い茶葉を使用した\nシンプルながら深みのある一杯\nゆったりとしたカフェタイムにぴったりです",
  },
  {
    img: DrinkImg4,
    title: "レモンティー",
    text: "爽やかなレモンの香りと紅茶の\n心地よい渋みが楽しめる一杯\nすっきりした後味で気分転換にぴったりです",
  },
  {
    img: DrinkImg5,
    title: "ロイヤルミルクティー",
    text: "上質な紅茶をじっくり煮出し\nミルクと合わせた贅沢な味わい\nまろやかで奥深いミルクティーです",
  },
  {
    img: DrinkImg6,
    title: "抹茶ラテ",
    text: "上品な抹茶とミルクが生み出す\nほのかに甘く香り高い一杯\n和の味わいを楽しみたい方におすすめ",
  },
];

const foodMenu = [
  {
    img: FoodImg1,
    title: "Chilla'sパンケーキ",
    text: "ふわふわのパンケーキに\nチンチラさんアートが施された\n見た目も楽しい一皿",
  },
  {
    img: FoodImg2,
    title: "Chilla'sパフェ",
    text: "季節のフルーツとアイスクリームが\nたっぷり詰まった贅沢な一品\nチンチラさんのクッキーがのっています",
  },
  {
    img: FoodImg3,
    title: "Chilla'sケーキ",
    text: "しっとり濃厚なチーズケーキに\nチンチラさんマシュマロが\nかわいいケーキです",
  },
  {
    img: FoodImg4,
    title: "Chilla'sプレート",
    text: "カリッと焼いたトーストに\nベーコンエッグと新鮮なサラダを添えた\nChilla's特製プレートです",
  },
  {
    img: FoodImg5,
    title: "Chilla'sバーガー",
    text: "ジューシーなパティと新鮮な野菜\n特製ソースが決め手のバーガーです\n食べ応え抜群です",
  },
];

const HomeMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto shippori">
        <h1 className="text-center shippori-bold fs-1">Menu</h1>

        {/* Drink Menu */}
        <h2 className="text-center mt-5 mb-0 fs-2 clr-1 menu-h2 shippori">
          Drink Menu
        </h2>
        <Carousel>
          {drinkMenu.map((item, index) => (
            <Carousel.Item key={index} interval={2700} className="text-center">
              <Container className="mt-5">
                <Row className="justify-content-center">
                  <Col
                    md={5}
                    className="order-md-1 order-sm-2 d-flex align-items-center justify-content-center"
                  >
                    <div className="mt-3 ">
                      <h3 className="fs-4">{item.title}</h3>
                      <p className="fs-6" style={{ whiteSpace: "pre-wrap" }}>
                        {item.text}
                      </p>
                    </div>
                  </Col>
                  <Col
                    md={4}
                    sm={5}
                    xs={8}
                    className="order-md-2 order-sm-1 d-flex flex-column align-items-center"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="d-block img-fluid menu-image"
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Food Menu */}
        <h2 className="text-center mt-5 mb-0 fs-2 clr-1 menu-h2 shippori">
          Food Menu
        </h2>
        <Carousel>
          {foodMenu.map((item, index) => (
            <Carousel.Item key={index} interval={2700} className="text-center">
              <Container className="mt-5 my-5">
                <Row className="justify-content-center">
                  <Col
                    md={4}
                    sm={5}
                    xs={8}
                    className="d-flex flex-column align-items-center"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="d-block img-fluid menu-image"
                    />
                  </Col>
                  <Col
                    md={5}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <div className="mt-3">
                      <h3>{item.title}</h3>
                      <p className="fs-6" style={{ whiteSpace: "pre-wrap" }}>
                        {item.text}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>

        <Button
          variant="outline-dark"
          className="secondary d-block mx-auto"
          onClick={() => navigate("/menu")}
        >
          Show more
        </Button>
      </div>
    </>
  );
};

export default HomeMenu;
