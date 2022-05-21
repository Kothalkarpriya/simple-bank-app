import { Routes, Route } from "react-router-dom";
import { Borrow, Home, Invest, Pay, Save } from "../Pages/pages";

export default function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Borrow" element={<Borrow />} />
        <Route path="/Invest" element={<Invest />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Save" element={<Save />} />
      </Routes>
    </div>
  );
}
