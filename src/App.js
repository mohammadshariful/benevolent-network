import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddEvent from "./Pages/Admin/AddEvent/AddEvent.js";
import Admin from "./Pages/Admin/Admin/Admin.js";
import VolunteerList from "./Pages/Admin/VolunteerList/VolunteerList.js";
import Events from "./Pages/Events/Events/Events";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth.js";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <AddEvent />
              </RequireAuth>
            }
          />
          <Route
            path="volunteerList"
            element={
              <RequireAuth>
                <VolunteerList />
              </RequireAuth>
            }
          />
          <Route
            index
            path="addevent"
            element={
              <RequireAuth>
                <AddEvent />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
