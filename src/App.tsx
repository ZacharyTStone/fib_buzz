import "./App.css";
import Nav from "./Components/MuiNav/MuiNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FibBuzz from "./Components/FibBuzz/FibBuzz";
import Info from "./Components/Info/Info";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Fib Buzz</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<FibBuzz />} />
          <Route path="info" element={<Info />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
