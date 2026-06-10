import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Industries from '@/pages/Indusrties';
import Capabilities from '@/pages/Capabilities';
import Infrastructure from '@/pages/Infrastructure';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
