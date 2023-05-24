import "./App.css";
// import { BrowserRouter } from "react-router-dom";

import Cart from "./Pages/Cart";
// import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";

function App() {
  const users = [
    {
      id: 1,
      Name: "Cart",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
