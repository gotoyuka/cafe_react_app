import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PettingReservation from "./pages/PettingReservation";
import Other from "./pages/Other";
import BusinessDay from "./components/HomeComponents/BusinessDay";
import Admin from "./pages/Admin";
import AdminSchedule from "./pages/AdminSchedule";
import AdminReservations from "./pages/AdminReservations.jsx";
import { useState, useEffect } from "react";

function App() {

  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const savedSchedules = JSON.parse(localStorage.getItem("schedules")) || [];
    setSchedules(savedSchedules);
  }, []);

  return (
    <>
      <Router>
        {/* お客様用ページ */}

        <div className="grad-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/petting_reservation"
              element={<PettingReservation />}
            />
            <Route path="/other" element={<Other />} />
            <Route
              path="/business_day"
              schedule={schedules} 
              element={<BusinessDay />}
            />
          </Routes>
        </div>
      </Router>

      {/* 管理者用ページ */}

      <div className="grad-main">
        <Router>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin_schedule" element={<AdminSchedule />} />
            <Route path="/admin_reservations" element={<AdminReservations />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
