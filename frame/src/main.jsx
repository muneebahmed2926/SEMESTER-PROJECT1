import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <NavBar />
    <App />
    <Footer />
  </BrowserRouter>
);