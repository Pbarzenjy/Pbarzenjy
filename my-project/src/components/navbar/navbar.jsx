import '../section-one/section-one.css';  
import Logo from '../../../public/images/navbar/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='section'>
    <nav className="navbar">
    <div className="logo">
    <Link to="/">
            <img src={Logo} alt="Silicon.logo" />
          </Link>
      <ul className="nav-links">
        <li className='feat'>
          <a href="features">Features</a>
          <a href="Contact">Contact</a>
        </li>
      </ul>
    </div>
  
    <div className="dark-mode-toggle">
      <label htmlFor="dark-mode" id="dark-mode">Dark Mode</label>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      
      <div className="sign-in-up">
        <button className="sign-in-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <circle cx="15.5" cy="8" r="4" />
            <path d="M16 16c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Sign in / up
        </button>
      </div>
    </div>
  </nav>
  </div>
  
  );
};

export default Navbar;
