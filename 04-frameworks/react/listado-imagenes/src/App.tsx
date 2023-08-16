import MainLayout from "./layouts/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/cars" element={<Cars />} />
        {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
