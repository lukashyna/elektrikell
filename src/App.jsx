import { Routes, Route } from "react-router-dom";
import ElectricPrice from "./ElectricPrice";
import About from "./About";
import AboutDev from "./About/AboutDev";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ElectricPrice />}>
          <Route path="lowprice/:hours" element={<ElectricPrice />} />
        </Route>

        <Route path="/about" element={<About />}>
          <Route path="me" element={<AboutDev />} />
          <Route path="gamma" element={<AboutDev />} />
          <Route path="contact-form" element={<AboutDev />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
