import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeltNotSaid from "./pages/projects/FeltNotSaid"; // example project page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/feltnotsaid" element={<FeltNotSaid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
