import "../src/styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
