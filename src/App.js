import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top_Menu from "../src/layout/menus/Top_Menu";
import App_Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import Cart from "./pages/cart-page/Cart";
import { BrowserRouter as Routers,Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Routers>
    <Top_Menu />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/cart"  element={<Cart />} />
        <Route path="/"  element={<Home />} />
        <Route path="/"  element={<Home />} />
        <Route path="/"  element={<Home />} />
        <Route path="/"  element={<Home />} />
        <Route path="/"  element={<Home />} />
      </Routes>
        <App_Footer />
    </Routers>
        
    </>
  );
}

export default App;
