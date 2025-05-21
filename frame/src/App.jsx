import {getDatabase} from "firebase/database"
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Deals from "./components/pages/Deals";
// import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
// import NotFound from "./components/pages/NotFound"; // Optional 404 page

const App = () => {
  return (
    <Routes>
      {/* <Route exact path='/product/:id' element={<ProductDetails />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/deal" element={<Deals/>} />
      <Route path="/categories" element={<Categories />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="*" element={<NotFound />} /> 404 route */}
    </Routes>
  );
};

export default App;

