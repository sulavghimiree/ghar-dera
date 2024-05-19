import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/hero/Hero";
import PopularRooms from "./Components/popularRooms/PopularRooms";
import Newsletter from "./Components/newsletter/Newsletter";
import Signup from "./Components/signup/Signup";
import Login from "./Components/login/Login";
import Rooms from "./Components/rooms/Rooms";
import RoomDetails from "./Components/roomDetails/RoomDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularRooms />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/rooms"
          element={
            <>
              <Navbar />
              <Rooms />
              <Footer />
            </>
          }
        />
        <Route
          path="/roomDetails"
          element={
            <>
              <Navbar />
              <RoomDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
