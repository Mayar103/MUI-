import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./Components/Shared/Nav";
import Footer from "./Components/Shared/Footer";
import Home from "./Pages/Home";
import Classes from "./Pages/Classes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Schedule from "./Pages/Schedule";
import Error from "./Pages/404";
import Subscribe from "./Components/Shared/Subscribe";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
