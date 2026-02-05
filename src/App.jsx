import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header-nav';
import Footer from './components/Footer';
import Product from './pages/Product';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;