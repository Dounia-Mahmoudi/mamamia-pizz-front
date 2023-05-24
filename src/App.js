import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil/AccueilPage";
import Reservation from "./pages/reservation/ReservationPage";
import NousTrouver from "./pages/noustrouver/NousTrouverPage";
import Menu from "./pages/menu/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/noustrouver" element={<NousTrouver />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
