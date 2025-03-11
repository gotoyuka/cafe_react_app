import { Container, Row, Col, Card } from "react-bootstrap";
import "../style.css";
import WasabiImg2 from "../img/wasabi2.png";

const PettingRules = () => {
  return (
    <Container className="mx-auto mt-3 mb-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm ">
            <Card.Body>
              <h4 className="text-center mb-4">
                チンチラとのふれあいに関する注意事項
              </h4>

              <h5>1. 触れ方について</h5>
              <ul>
                <li>やさしく、そっとなでてあげましょう。</li>
                <li>急に触ったり、大きな声を出すと驚いてしまいます。</li>
                <li>
                  抱っこは基本NGです。チンチラは高いところから飛び降りる習性があるため、危険です。
                </li>
              </ul>
              <h5>2. 騒音・動きについて</h5>
              <ul>
                <li>大きな音や声を出さないようにしましょう。</li>
                <li>
                  急な動きはチンチラを怖がらせてしまうため、ゆっくりとした動作を心がけましょう。
                </li>
              </ul>
              <h5>3. 食べ物の持ち込み禁止</h5>
              <ul>
                <li>おやつや食べ物を勝手にあげないでください。</li>
                <li>
                  チンチラの健康管理のため、決められたフードのみを与えています。
                </li>
              </ul>
              <h5>4. 写真撮影について</h5>
              <ul>
                <li>フラッシュ撮影は絶対に禁止です。</li>
                <li>
                  写真を撮る際は、周囲の人の迷惑にならないようご配慮ください。
                </li>
              </ul>
              <h5>5. 体調管理について</h5>
              <ul>
                <li>
                  体調の悪い方、動物アレルギーのある方はご自身の体調を優先してください。
                </li>
                <li>ふれあい後は必ず手を洗いましょう。</li>
              </ul>
              <div className="d-flex justify-content-center mb-3 bg-success-subtle">
                <img src={WasabiImg2} className="w-25 "></img>
                <p className="text-center my-auto shippori-bold">
                  チンチラたちが安心して過ごせるよう<br/>ご協力をお願いします
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PettingRules;
