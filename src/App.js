import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Farm from './pages/Farm';
import Contact from './pages/Contact';
import Corporate from './pages/Corporate';
import Sustainability from './pages/Sustainability';

function App() {
  return (
    <BrowserRouter basename="/afrinuts-export-website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* Add these nested under /about */}
          <Route path="about/corporate" element={<Corporate />} />
          <Route path="about/sustainability" element={<Sustainability />} />
          {/* Other routes */}
          <Route path="products" element={<Products />} />
          <Route path="farm" element={<Farm />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;