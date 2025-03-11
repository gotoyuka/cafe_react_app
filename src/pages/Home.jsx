
import { useState, useEffect } from "react";
import HomeMenu from "../components/HomeComponents/HomeMenu";
import HomePettingReservation from "../components/HomeComponents/HomePettingReservation";
import BusinessDay from "../components/HomeComponents/BusinessDay";
import Access from "../components/HomeComponents/Access";
import HomeTop from "../components/HomeComponents/HomeTop";
import Header from "../components/Header";

function Home() {

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const savedSchedules = localStorage.getItem("schedules");
    if (savedSchedules) {
      setSchedule(JSON.parse(savedSchedules));
    }
  }, []);
  return (
    <>
    <Header/>
      <HomeTop />
      <HomeMenu />
      <HomePettingReservation />
      <BusinessDay schedule={schedule} title="営業日のご案内" />
      <Access />
    </>
  );
}

export default Home;
