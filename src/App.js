import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./core/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Products from "./pages/Products.js"
import ProductDetail from "./pages/ProductDetail.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout pageContent={<Home />} />} />
        <Route path="/about" element={<Layout pageContent={<About />} />} />
        <Route path="/contact" element={<Layout pageContent={<Contact />} />} />
        <Route path="/products" element={<Layout pageContent={<Products />} />} />
        <Route path="/product-detail" element={<Layout pageContent={<ProductDetail />} />} />
      </Routes>
    </BrowserRouter>
  );
}
