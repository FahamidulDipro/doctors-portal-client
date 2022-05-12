import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appoinment" element={<Appointment></Appointment>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
