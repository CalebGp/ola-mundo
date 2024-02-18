import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Start from "./pages/start";
import Menu from "./components/menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
