import {Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/index";
import Home from "./pages/home";
import Details from "./pages/details";
import Fav from "./pages/favourites";


function App() {
  return (
    <div className="min-h-screen p-6  bg-gray-400 text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Fav />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
