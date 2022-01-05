import "./App.css";
import Nav from "./Components/MuiNav/MuiNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FibBuzz from "./Components/FibBuzz/FibBuzz";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Fib Buzz</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<FibBuzz />} />
          <Route path="info" element={<Info />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
