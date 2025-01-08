import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FreightQuotePage } from './pages/FreightQuotePage';
import { FleetPage } from './pages/FleetPage';
import { PriceQuotePage } from './pages/PriceQuotePage';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cotacao" element={<FreightQuotePage />} />
        <Route path="/frota" element={<FleetPage />} />
        <Route path="/cotacao-precos" element={<PriceQuotePage />} />
      </Routes>
    </Router>
  );
}

export default App;