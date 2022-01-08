import "./App.css";
import Nav from "./Components/MuiNav/MuiNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/FibBuzz/Form";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";

import Title from "./Components/Title/Title";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Nav />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="info" element={<Info />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
