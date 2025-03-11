import { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import HeaderAdmin from "../components/HeaderAdmin";

const AdminReservations = () => {
  const [reservations, setReservations] = useState([]);

  // `localStorage` から予約情報を取得
  useEffect(() => {
    const savedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(savedReservations);
  }, []);

  // 予約削除（キャンセル）処理
  const handleDelete = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  return (
    <>
      <HeaderAdmin />
      <Container className="shippori">
        <h2 className="text-center mt-3">ふれあい予約管理</h2>

        <Table striped bordered hover className="mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>日付</th>
              <th>時間</th>
              <th>名前</th>
              <th>メールアドレス</th>
              <th>電話番号</th>
              <th>人数</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length > 0 ? (
              reservations.map((res, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{res.date}</td>
                  <td>{res.time}</td>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.phone}</td>
                  <td>{res.people}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(index)}
                    >
                      削除
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  現在予約はありません
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AdminReservations;
