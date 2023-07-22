import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
// import Navbar from './components/Navbar/Navbar';
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeInsurance from "./components/LandingPage/ProductSection/HomeInsurance";
import VehicleInsurance from "./components/LandingPage/ProductSection/VehicleInsurance";
import LifeInsurance from "./components/LandingPage/ProductSection/LifeInsurance";
import DeviceInsurance from "./components/LandingPage/ProductSection/DeviceInsurance";
import TravelInsurance from "./components/LandingPage/ProductSection/TravelInsurance";
import Signup from "./components/Authentication/Signup";
import Signin from "./components/Authentication/Signin";
import AboutUs from "./components/Navbar/AboutUs";
import Blog from "./components/Navbar/Blog";
import Help from "./components/Navbar/Help";
import Aside from "./components/Dashboard/Aside";
import AsideNav from "./components/Dashboard/AsideNav";
import Dashboard from "./components/Dashboard/Dashboard";
import AccountSettings from "./components/Dashboard/AccountSettings";
import History from "./components/Dashboard/History";
import InProgress from "./components/Dashboard/InProgress";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home-insurance" element={<HomeInsurance />} />
          <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
          <Route path="/life-insurance" element={<LifeInsurance />} />
          <Route path="/device-insurance" element={<DeviceInsurance />} />
          <Route path="/travel-insurance" element={<TravelInsurance />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aside" element={<Aside />} />
          <Route path="/aside-nav" element={<AsideNav />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/history" element={<History />} />
          <Route path="/in-progress" element={<InProgress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
