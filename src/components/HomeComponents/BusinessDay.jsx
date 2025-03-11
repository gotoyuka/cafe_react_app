import PropTypes from 'prop-types';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../style.css";

const BusinessDay = ({ schedule = [], title = "営業日のご案内" }) => {
  const eventColors = {
    オープン: "#b9b4a9",
    ふれあい可能日: "#97bcb5",
    臨時休業: "#CAA2A6",
  };

  const events = schedule.flatMap((schedule) =>
    schedule.dates.map((date) => ({
      title: schedule.type,
      start: date,
      allDay: true,
      backgroundColor: eventColors[schedule.type],
      textColor: "#f1ebdb",
      color: "#EEE7D3",
    }))
  );
  // console.log(events);

  return (
    <div className="shippori w-75 mx-auto mt-5 ">
      <h2 className="shippori-bold text-center fs-2">Business Day</h2>
      <h5 className="text-center">- {title} -</h5>
      <div className="fs-7 bg-light">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
        />
      </div>
    </div>
  );
};


BusinessDay.propTypes = {
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      dates: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  title: PropTypes.string,
};

export default BusinessDay;
