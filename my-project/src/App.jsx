import './styles/index.css';
import './styles/container.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';  
import Footer from './components/footer/footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';

function App() {
  
  const [isDarkmode, setIsDarkMode] = useState(() => {
    const savedTheme = sessionStorage.getItem('isDarkmode');
    return savedTheme === 'true' ? true : false;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkmode);
  };

  useEffect(() => {
    sessionStorage.setItem('isDarkmode', isDarkmode);
  }, [isDarkmode]);

  return (
    <Router>
      <div className={isDarkmode ? 'dark-theme' : 'light-theme' }> 
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkmode} />  

        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkmode}/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
