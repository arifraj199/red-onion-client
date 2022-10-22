import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./Pages/Food/Breakfast/Breakfast";
import Dinner from "./Pages/Food/Dinner/Dinner";
import Lunch from "./Pages/Food/Lunch/Lunch";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Breakfast></Breakfast>}></Route>
          <Route path="lunch" element={<Lunch></Lunch>}></Route>
          <Route path="dinner" element={<Dinner></Dinner>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
