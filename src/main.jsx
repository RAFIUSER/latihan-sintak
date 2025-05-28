import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/Kontak";
import PesertaPage from "./pages/PesertaPage";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peserta" element={<PesertaPage />} />
        <Route path="/kontak" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
