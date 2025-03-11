import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Npm from "../img/icon/npm.png";
import ClipStudio from "../img/icon/clip-studio-paint.png";
import BootStrap from "../img/icon/bootstrap.png";
import Vite from "../img/icon/vite.png";
import Git from "../img/icon/github.png";
import React from "../img/icon/react.png";

const Other = () => {
  const toolIcons = [
    { img: ClipStudio, title: "CLIP STUDIO PAINT" },
    { img: Npm, title: "npm" },
    { img: Vite, title: "Vite" },
    { img: Git, title: "Git Hub" },
    { img: BootStrap, title: "Bootstrap5/React Bootstrap" },
    { img: React, title: "React" },
  ];

  return (
    <>
      <Header />
      <Container className="mt-4">
        <h2 className="text-center">このサイトについて</h2>


        <h4 className="mt-4">自己PR</h4>
        <p>
          ポートフォリオサイトをご覧いただきありがとうございます。
          <br />
          私はWeb業界への転職を目指し、日々学習を進めています。
          <br />
          このサイトはReactを使用し、パフォーマンスやユーザー体験を考慮しながら制作しました。
          <br />
          シンプルでわかりやすいデザインと、直感的なナビゲーションを意識しています。
          <br />
          Web業界での即戦力となるにはまだまだ学ぶべきことが多いですが、絶えず学び続ける姿勢を持ち、
          誠実に業務に向き合っていきたいと考えています。
          <br />
          どうか私の成長意欲を評価していただき、面接の機会をいただけますと幸いです。
          よろしくお願いいたします。
        </p>

        <h4 className="mt-4">使用技術・ツール</h4>
        <Row className="justify-content-center">
          {toolIcons.map((item, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} lg={2} className="mb-3">
              <Card className="text-center shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="p-3"
                  style={{ height: "80px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Text className="fs-6">{item.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h4 className="mt-4">今後の展望</h4>
        <p>
          今回の制作を通して、コードをより簡潔で可読性の高い形にすることの重要性を実感しました。
          <br />
          また、会員登録やスタンプ機能のような高度な機能を追加しようとした際、
          データベースの知識やバックエンド開発の理解が不可欠であることも学びました。
          <br />
          今後はプログラミングの仕組みをより深く学び、
          フロントエンドの技術を磨くだけでなく、バックエンドの学習にも取り組み
          <br />
          チームでの開発にも対応できるスキルを身につけたいと考えています。
          
        </p>


        <footer className="text-center mt-5">
          <p className="small text-muted">
            <a target="_blank" href="https://icons8.com/icon/EzPCiQUqWWEa/bootstrap">
              BootStrap5
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">Icons8</a> |{" "}
            <a target="_blank" href="https://icons8.com/icon/dJjTWMogzFzg/vite">
              Vite
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">Icons8</a> |{" "}
            <a target="_blank" href="https://icons8.com/icon/asWSSTBrDlTW/react">
              React
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">Icons8</a> |{" "}
            <a target="_blank" href="https://icons8.com/icon/24895/npm">
              NPM
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">Icons8</a> |{" "}
            <a target="_blank" href="https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code-2019">
              Visual Studio Code 2019
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">Icons8</a> |{" "}
            <a target="_blank" href="https://icons8.com/icon/AZOZNnY73haj/github">
              GitHub
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">Icons8</a>
          </p>
        </footer>
      </Container>
    </>
  );
};

export default Other;
