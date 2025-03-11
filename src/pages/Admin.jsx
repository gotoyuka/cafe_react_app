import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import logoimg from "../img/logo.png";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate("/admin_schedule"); // AdminSchedule へリダイレクト
    } else {
      setError("パスワードが違います。正しく入力してください。");
    }
  };

  return (
    <>
      <Container className="w-50">
        <img
          src={logoimg}
          alt="logo"
          className="rounded mx-auto d-block "
          style={{ width: "100px", height: "auto" }}
        />
        <h3 className="shop-title text-center">Cafe Chilla&apos;s</h3>
      </Container>
      <Container className="text-center ">
        <h2 className=" pt-5 pb-3">管理者ページ</h2>
        <Form onSubmit={handleLogin} className="w-50 mx-auto">
          <Form.Group className="mb-3">
            <Form.Label className="py-3">パスワード</Form.Label>
            <Form.Control
              type="password"
              placeholder="パスワードを入力"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="my-3 ">
            ログイン
          </Button>
        </Form>
        {error && (
          <Alert variant="danger" className="mt-3 w-50 mx-auto">
            {error}
          </Alert>
        )}

        <div className="mb-0">
          <p className="py-3 mb-0">管理者用パスワードは応募サイトの自己PR欄、または備考欄に記載しております</p>
        </div>
      </Container>
    </>
  );
};

export default Admin;
