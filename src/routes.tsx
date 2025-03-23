import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import FinalizarCompra from "./pages/FinalizarCompra";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/finalizarCompra" element={<FinalizarCompra />} />
      </Routes>
    </BrowserRouter>
  );
}
