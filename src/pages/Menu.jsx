import { Card, Col, Row } from "react-bootstrap";
import "../style.css";

import Header from "../components/Header";
import DrinkImg1 from "../img/menu/dr-1.png";
import DrinkImg2 from "../img/menu/dr-2.png";
import DrinkImg3 from "../img/menu/dr-3.png";
import DrinkImg4 from "../img/menu/dr-4.png";
import DrinkImg5 from "../img/menu/dr-5.png";
import DrinkImg6 from "../img/menu/dr-6.png";
import FoodImg1 from "../img/menu/fd-1.png";
import FoodImg2 from "../img/menu/fd-2.png";
import FoodImg3 from "../img/menu/fd-3.png";
import FoodImg4 from "../img/menu/fd-4.png";
import FoodImg5 from "../img/menu/fd-5.png";


const drinkMenu = [
  {
    img: DrinkImg1,
    title: "ブレンドChilla'sコーヒー",
    price: "¥450",
    text: "店長が厳選したコーヒー豆を絶妙な比率で組み合わせた\n当店オリジナルのコーヒーです",
  },
  {
    img: DrinkImg2,
    title: "Chilla'sラテ",
    price: "¥500",
    text: "濃厚なエスプレッソとスチームミルクが織りなすクリーミーで優しい味わい\n店長の気分次第でラテアートも楽しめます",
  },
  {
    img: DrinkImg3,
    title: "Chilla'sティー",
    price: "¥480",
    text: "香り高い茶葉を使用したシンプルながら深みのある一杯\nゆったりとしたカフェタイムにぴったりです",
  },
  {
    img: DrinkImg4,
    title: "レモンティー",
    price: "¥520",
    text: "爽やかなレモンの香りと紅茶の心地よい渋みが楽しめます\nすっきりした後味で気分転換にぴったり",
  },
  {
    img: DrinkImg5,
    title: "ロイヤルミルクティー",
    price: "¥550",
    text: "上質な紅茶をじっくり煮出しミルクと合わせた贅沢な味わい\nまろやかで奥深いミルクティーです",
  },
  {
    img: DrinkImg6,
    title: "抹茶ラテ",
    price: "¥580",
    text: "上品な抹茶とミルクが生み出すほのかに甘く香り高い一杯\n和の味わいを楽しみたい方におすすめ",
  },
];

const foodMenu = [
  {
    img: FoodImg1,
    title: "Chilla'sパンケーキ",
    price: "¥750",
    text: "ふわふわのパンケーキにチンチラさんアートが施された\n見た目も楽しい一皿",
  },
  {
    img: FoodImg2,
    title: "Chilla'sパフェ",
    price: "¥850",
    text: "季節のフルーツとアイスクリームがたっぷり詰まった贅沢な一品\nチンチラさんのクッキーがのっています",
  },
  {
    img: FoodImg3,
    title: "Chilla'sケーキ",
    price: "¥680",
    text: "しっとり濃厚なチーズケーキにチンチラさんマシュマロがかわいいケーキです",
  },
  {
    img: FoodImg4,
    title: "Chilla'sプレート",
    price: "¥900",
    text: "カリッと焼いたトーストにベーコンエッグと新鮮なサラダを添えた\nChilla's特製プレートです",
  },
  {
    img: FoodImg5,
    title: "Chilla'sバーガー",
    price: "¥980",
    text: "ジューシーなパティと新鮮な野菜\n特製ソースが決め手のバーガーです\n食べ応え抜群です",
  },
];

const Menu = () => {
  return (
    <>
      <Header />
      <div className="py-4">
        <h2 className="mb-4 text-center shippori-bold fs-1">The Menu List</h2>
        <div className="px-5">
          <h2 className="text-center mb-3 mb-0 fs-2 clr-1 menu-h2 shippori">
            Drink Menu
          </h2>
          <Row xs={2} md={3} lg={3} className=" shippori g-2 ">
            {drinkMenu.map((item, idx) => (
              <Col key={idx}>
                <Card className="menu-card">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="menu-image"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="fs-6 shippori-bold">
                      {item.price}
                    </Card.Text>
                    <Card.Text style={{ whiteSpace: "pre-wrap" }}>
                      {item.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="px-5">
          <h2 className="text-center mt-5 mb-3 fs-2 clr-1 menu-h2 shippori">
            Food Menu
          </h2>
          <Row xs={2} md={3} className=" shippori g-2 ">
            {foodMenu.map((item, idx) => (
              <Col key={idx}>
                <Card className="menu-card">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="menu-image"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="fs-6 shippori-bold">
                      {item.price}
                    </Card.Text>
                    <Card.Text style={{ whiteSpace: "pre-wrap" }}>
                      {item.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Menu;
