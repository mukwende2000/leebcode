import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
