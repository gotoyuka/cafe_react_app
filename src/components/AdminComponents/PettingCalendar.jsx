import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const PettingCalendar = ({ onDateSelect }) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const timeSlots = ["16:00", "17:00", "18:00"];
  const MAX_CAPACITY = 4; // 1枠あたりの最大予約人数

  useEffect(() => {
    // スケジュールデータを取得
    const savedSchedules = JSON.parse(localStorage.getItem("schedules")) || [];
    const dates = savedSchedules
      .filter((schedule) => schedule.type === "ふれあい可能日")
      .flatMap((schedule) => schedule.dates);
    setAvailableDates(dates);

    // 予約データを取得
    const savedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(savedReservations);
  }, []);

  const changeMonth = (offset) => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + offset;
      let newYear = currentYear;

      if (newMonth > 12) {
        newMonth = 1;
        newYear += 1;
      } else if (newMonth < 1) {
        newMonth = 12;
        newYear -= 1;
      }

      setCurrentYear(newYear);
      return newMonth;
    });
  };

  const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

  const dates = [];
  const firstDayOfWeek = new Date(currentYear, currentMonth - 1, 1).getDay();

  for (let i = 0; i < firstDayOfWeek; i++) {
    dates.push(null);
  }

  for (let day = 1; day <= getDaysInMonth(currentYear, currentMonth); day++) {
    const dateStr = `${currentYear}-${String(currentMonth).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    dates.push(dateStr);
  }

  return (
    <div className="w-75 mx-auto mt-5 fs-5 container">
      <div className="text-center mb-5">
        <h2>予約フォーム</h2>
        <p className="fs-5">カレンダーから日付を選択してください</p>
        <p className="fs-6 mb-1">予約が可能な日は色がついています</p>
        <p className="fs-6">日付を選択すると空き状況を確認できます</p>


      </div>

      <div className="d-flex align-items-center mb-3">
        <span className="me-auto fs-6 flex-fill">
          {currentYear}年 {currentMonth}月
        </span>
        <div className="ms-auto flex-fill">
          <button onClick={() => changeMonth(-1)}>前の月</button>
          <button onClick={() => changeMonth(1)}>次の月</button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {daysOfWeek.map((day, index) => (
          <div key={index} style={{ padding: "5px" }}>
            {day}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
        }}
      >
        {dates.map((date, index) => {
          if (!date) {
            return (
              <div
                key={index}
                style={{ padding: "10px", visibility: "hidden" }}
              ></div>
            );
          }

          let statusIcon = "〇"; // 初期値（全枠予約可能）
          let backgroundColor = "#97bcb5"; // 初期値（緑）
          let isFullyBooked = true; // すべての時間枠が満員かどうか

          if (availableDates.includes(date)) {
            let hasLimitedSlots = false;
            let totalPeopleOnDate = reservations
              .filter((res) => res.date === date)
              .reduce((sum, res) => sum + Number(res.people), 0);

            for (const time of timeSlots) {
              const reservedCount = reservations
                .filter((res) => res.date === date && res.time === time)
                .reduce((sum, res) => sum + Number(res.people), 0);

              if (reservedCount < MAX_CAPACITY) {
                isFullyBooked = false;
              }
              if (reservedCount > 0 && reservedCount < MAX_CAPACITY) {
                hasLimitedSlots = true;
              }
            }
            // 一部枠埋まりの判定（1日に6人以上でtrue）
            if (totalPeopleOnDate >= 6) {
              hasLimitedSlots = true;
            }
            if (isFullyBooked) {
              backgroundColor = "#ffb6c1"; // 全枠満員（赤）
              statusIcon = "✕";
            } else if (hasLimitedSlots) {
              backgroundColor = "#ffdead"; // 一部枠埋まり（黄色）
              statusIcon = "△";
            }
          } else {
            backgroundColor = "#ddd"; // 予約不可（グレー）
            statusIcon = "　";
          }

          return (
            <button
              key={date}
              onClick={() => {
                setSelectedDate(date);
                onDateSelect(date);
              }}
              className="d-flex flex-column justify-content-center align-items-center border"
              style={{
                width: "100%",
                height: "100px",
                cursor:
                  availableDates.includes(date) && !isFullyBooked
                    ? "pointer"
                    : "not-allowed",
                backgroundColor,
                border: "1px solid #ccc",
                color: "#666",
              }}
              disabled={!availableDates.includes(date) || isFullyBooked}
            >
              <div>
                <Col className="fs-7 shippori-bold">{date.split("-")[2]}</Col>
                <Col>{statusIcon}</Col>
              </div>
            </button>
            
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-4">
          <h4>{selectedDate} の予約状況</h4>
          <ul>
            {timeSlots.map((time) => {
              const count = reservations
                .filter((res) => res.date === selectedDate && res.time === time)
                .reduce((sum, res) => sum + Number(res.people), 0);

              const remainingSeats = MAX_CAPACITY - count;
              let statusText = "予約可能";
              let color = "green";

              if (remainingSeats <= 0) {
                statusText = "予約不可";
                color = "red";
              }

              return (
                <li key={time} style={{ color }}>
                  {time} - {statusText}（{count} / {MAX_CAPACITY}）
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

PettingCalendar.propTypes = {
  onDateSelect: PropTypes.func.isRequired,
};

export default PettingCalendar;
