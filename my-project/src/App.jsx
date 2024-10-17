import './styles/index.css';
import './styles/container.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';  
import Footer from './components/footer/footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div> 
        <Navbar />  
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
