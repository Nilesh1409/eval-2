import "./App.css";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
// import Products from "./components/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return <div className="App">
    <Navbar></Navbar>
    <Login></Login>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
    

  </div>;
}

export default App;
