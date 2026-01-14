import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Design from '@/pages/Design';
import Engineerservice from '@/pages/Engineerservice';
import Industries from '@/pages/Indusrties';
import Automative from '@/pages/Automative';
import Iot from '@/pages/Iot';
import Aerospace from '@/pages/Aerospace';
import Healthcare from '@/pages/Healthcare';
import Green from '@/pages/Green';
import Contact from '@/pages/Contact';
import Sustainability from '@/pages/Sustainability';
import SupplyChain from '@/pages/SupplyChain';
import Testing from '@/pages/Testing';
import Aftermarket from '@/pages/Aftermarket';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/engineering" element={<Engineerservice />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/automotive" element={<Automative />} />
        <Route path="/industries/iot" element={<Iot />} />
        <Route path="/industries/Aerospace" element={<Aerospace />} />
         <Route path="/industries/Healthcare" element={<Healthcare />} />
          <Route path="/industries/Green" element={<Green />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/services/SupplyChain" element={<SupplyChain />} />
        <Route path="/services/Aftermarket" element={<Aftermarket />} />
        <Route path="/services/Testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}
