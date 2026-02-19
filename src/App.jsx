import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';              
import { useLocation } from 'react-router-dom';  
import Home from './pages/Home';
import Header from './components/Header-nav';
import Footer from './components/Footer';
import Product from './pages/Product';
import Application from './pages/application';



function ScrollToAnchor() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash, key]); 

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            {/* <Route path="/application" element={<Application />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;