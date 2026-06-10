import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Buttons } from "./pages/Buttons";
import { Cards } from "./pages/Cards";
import { Accordions } from "./pages/Accordions";
import { Forms } from "./pages/Forms";
import { Modals } from "./pages/Modals";
import { Tables } from "./pages/Tables";
import { Badges } from "./pages/Badges";
import { Alerts } from "./pages/Alerts";
import { Hero } from "./pages/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="cards" element={<Cards />} />
          <Route path="accordions" element={<Accordions />} />
          <Route path="forms" element={<Forms />} />
          <Route path="modals" element={<Modals />} />
          <Route path="tables" element={<Tables />} />
          <Route path="hero" element={<Hero />} />
          <Route path="badges" element={<Badges />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
