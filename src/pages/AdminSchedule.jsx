import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Container, Table, Pagination } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "react-datepicker/dist/react-datepicker.css";
import BusinessDay from "../components/HomeComponents/BusinessDay";
import HeaderAdmin from "../components/HeaderAdmin";

const AdminSchedule = () => {
  const [selectedDates, setSelectedDates] = useState([new Date()]);
  const [scheduleType, setScheduleType] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const savedSchedules = localStorage.getItem("schedules");
    if (savedSchedules) {
      setSchedules(JSON.parse(savedSchedules));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dates = selectedDates.map((date) => {
      // タイムゾーンを日本時間へ変換
      const localDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      );
      return localDate.toISOString().split("T")[0];
    });

    const newSchedule = {
      type: scheduleType,
      dates: dates,
    };

    // 登録完了のメッセージ・日付の選択をリセット
    setSchedules([...schedules, newSchedule]);
    setMessage("登録完了しました!");

    setSelectedDates([]);

    setTimeout(() => setMessage(""), 3000);
  };

  // スケジュールの削除
  const handleDelete = (dateToDelete) => {
    setSchedules((prevSchedules) => {
      const newSchedules = prevSchedules.map((schedule) => ({
        ...schedule,
        dates: schedule.dates.filter((date) => date !== dateToDelete),
      }));

      // 空のスケジュールを削除する
      return newSchedules.filter((schedule) => schedule.dates.length > 0);
    });
  };

  // スケジュールを登録が新しい順に並べる
  const sortedSchedules = [...schedules].reverse();

  // 現在のページのデータを取得
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedSchedules = sortedSchedules
    .flatMap((schedule, scheduleIndex) =>
      schedule.dates.map((date, dateIndex) => ({
        id: `${scheduleIndex + 1}-${dateIndex + 1}`,
        date: date,
        type: schedule.type,
      }))
    )
    .slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    sortedSchedules.flatMap((s) => s.dates).length / itemsPerPage
  );

  return (
    <>
      <div>
        <HeaderAdmin />
        <h2 className="shippori-bold py-3 text-center">営業日の設定ページ</h2>

        {message && <p className="text-success text-center">{message}</p>}
        <Form method="post" onSubmit={handleSubmit}>
          <Container className="text-center shippori w-50">
            <h4 className="fs-5">1.登録するスケジュールを選択してください</h4>
            <Form.Select onChange={(e) => setScheduleType(e.target.value)}>
              <option value="">選択してください</option>
              <option value="オープン">オープン</option>
              <option value="臨時休業">臨時休業</option>
              <option value="ふれあい可能日">ふれあい可能日</option>
            </Form.Select>

            <hr />

            <div className="text-center shippori py-3">
              <h4 className="fs-5">2.登録する日付を選択してください</h4>
              <DatePicker
                selectedDates={selectedDates}
                selectsMultiple
                onChange={(dates) => setSelectedDates(dates)}
                shouldCloseOnSelect={false}
                disabledKeyboardNavigation
              />
            </div>

            <button type="submit" className="mt-4 py-1 px-4">
              登録
            </button>
          </Container>
        </Form>

        <hr />

        <BusinessDay schedule={schedules} title="確認用カレンダー" />

        <Container className="text-center shippori w-75 mt-5">
          <h4 className="py-3">登録済みスケジュール</h4>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Days</th>
                <th>Type</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {displayedSchedules.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>
                    <button onClick={() => handleDelete(item.date)}>
                      削除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* ページネーション */}
          <Pagination className="justify-content-center mb-0">
            <Pagination.Prev
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
            <Pagination.Item>
              {currentPage} / {totalPages}
            </Pagination.Item>
            <Pagination.Next
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="pb-3"
            />
          </Pagination>
        </Container>
      </div>
    </>
  );
};

export default AdminSchedule;
