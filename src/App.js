import "./App.css";
import Herobanner from "./Components/Herobanner";
import FamouseCitys from "./Components/FamouseCitys";
import SpotsMumbai from "./Components/Spots";
import Activities from "./Components/Activities";
import TopDestination from "./Components/TopDestination";
import Hotels from "./Components/Hotels";
import MoreCities from "./Components/MoreCities";
import MoreSpots from "./Components/MoreSpots";
import MoreActivities from "./Components/MoreActivities";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import MumbaiSpots from "./Components/MumbaiSpots";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import SpotDetail from "./Components/SpotDetail";
import HotelBooking from "./Components/HotelBooking";
import Spots from "./Components/Spots";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/FamouseCities" element={<FamouseCitys />} />
          <Route path="/citydetail" element={<MumbaiSpots />} />
          <Route path="/morecities" element={<MoreCities/>} />


          <Route path="/activities" element={<Activities/>} />
          <Route path="/moreactivities" element={<MoreActivities/>} />
         
          
        
          <Route path="/spots" element={<Spots/>} />
          <Route path="/spotdetail" element={<SpotDetail/>} />
          <Route path="/morespots" element={<MoreSpots/>} />

          <Route path="/hotels" element={<Hotels/>} />
          <Route path="/hotelbooking" element={<HotelBooking/>} />

          


        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
