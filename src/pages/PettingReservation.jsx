import { useState, useEffect } from "react";
import PettingCalendar from "../components/AdminComponents/PettingCalendar"; // カレンダーコンポーネント
import { Form, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header";
import PettingRules from "../components/PettingRules";

const PettingReservation = () => {
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    people: 1,
  });

  const [existingReservations, setExistingReservations] = useState([]);
  const maxPeoplePerSlot = 4;
  const availableTimes = ["16:00", "17:00", "18:00"];

  useEffect(() => {
    const savedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setExistingReservations(savedReservations);
  }, []);

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleDateSelect = (date) => {
    // 今日の日付以前を選択するとアラートを表示する
    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      alert("過去の日付は選択できません。");
      return;
    }
    setReservation({ ...reservation, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time, people } = reservation;

    const bookedPeople = existingReservations
      .filter((res) => res.date === date && res.time === time)
      .reduce((total, res) => total + parseInt(res.people), 0);

    if (bookedPeople + parseInt(people) > maxPeoplePerSlot) {
      alert("この時間帯は満席です。別の時間を選択してください。");
      return;
    }

    const newReservations = [...existingReservations, reservation];
    setExistingReservations(newReservations);
    localStorage.setItem("reservations", JSON.stringify(newReservations));

    alert(`予約が完了しました！\n日付: ${date}\n時間: ${time}`);

    setReservation({
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      people: 1,
    });
  };

  return (
    <div className="shippori">
      <Header />
      <div className="text-center">
        <h2 className="mt-3 shippori-bold fs-2">ふれあいのご予約</h2>
        <p>ご予約の前に注意事項のご確認をお願いいたします</p>
      </div>

      <PettingRules />

      {/* カレンダーコンポーネント */}
      <PettingCalendar onDateSelect={handleDateSelect} />

      <Form onSubmit={handleSubmit} className="mt-4 w-75 mx-auto">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDate">
            <Form.Label>選択した日付</Form.Label>
            <Form.Control
              type="text"
              value={reservation.date || "未選択"}
              readOnly
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formTime">
            <Form.Label>ふれあい時間</Form.Label>
            <Form.Select
              name="time"
              value={reservation.time}
              onChange={handleChange}
            >
              {availableTimes.map((time) => (
                <option
                  key={time}
                  value={time}
                  disabled={
                    existingReservations
                      .filter(
                        (res) =>
                          res.date === reservation.date && res.time === time
                      )
                      .reduce(
                        (total, res) => total + parseInt(res.people),
                        0
                      ) >= maxPeoplePerSlot
                  }
                >
                  {time}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formName">
          <Form.Label>お名前</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={reservation.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={reservation.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>電話番号</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={reservation.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formPeople">
          <Form.Label>人数</Form.Label>
          <Form.Control
            type="number"
            name="people"
            value={reservation.people}
            min="1"
            max={maxPeoplePerSlot}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <p className="py-3 text-danger-emphasis ">※予約ボタンを押すと予約が完了します<br />
        スクリーンショットなどを撮って保存をおすすめいたします
        </p>

        <Button
          variant="outline-dark "
          className="d-block mx-auto mt-3 px-4 "
          type="submit"
        >
          予約する
        </Button>
      </Form>
      <div className="w-50 mx-auto mt-3">
      <h5 className="fs-6 py-3 text-center text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
        ご予約の変更やキャンセルはお電話にて受け付けております
      </h5>
      </div>
    </div>
  );
};

export default PettingReservation;
