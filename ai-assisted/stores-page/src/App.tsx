import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Stores from './pages/Stores';
import StoreDetails from './pages/StoreDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/stores" replace />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/stores/:slug" element={<StoreDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
