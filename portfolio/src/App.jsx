import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeltNotSaid from "./pages/FeltNotSaid"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feltnotsaid" element={<FeltNotSaid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
