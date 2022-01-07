import "./App.css";
import Nav from "./Components/UI/MuiNav/MuiNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/FibBuzz/Form";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import Recursive from "./Components/Recursive/Recursive";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Fib Buzz</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="info" element={<Info />} />
          <Route path="about" element={<About />} />
          <Route path="recursive" element={<Recursive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
