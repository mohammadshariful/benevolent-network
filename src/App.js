import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddEvent from "./Pages/Admin/AddEvent/AddEvent.js";
import Admin from "./Pages/Admin/Admin/Admin.js";
import VolunteerList from "./Pages/Admin/VolunteerList/VolunteerList.js";
import Events from "./Pages/Events/Events/Events";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AddEvent />} />
          <Route path="volunteerList" element={<VolunteerList />} />
          <Route index path="addevent" element={<AddEvent />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
