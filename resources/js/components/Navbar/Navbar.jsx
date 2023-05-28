import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

import Logo from '../../../../public/assets/dontnod.svg'


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
      setIsLoggedIn(false)
      navigate("/login")
    }
    
    return (
      <div className="Navbar">
      <a href='/home'><img src={Logo} className="nav-logo"></img></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/games">Games</a>
        <a href="/about">About us</a>
      </div>
      <div className="nav-buttons">
        {isLoggedIn ? (
          // Mostra i pulsanti per l'utente autenticato
          <button className='button-logout' onClick={handleLogout}>LOGOUT</button>
        ) : (
          // Mostra i pulsanti per l'utente non autenticato
          <>
            <a href="/signup"><button className='button-signup'>SIGN UP</button></a>
            <a href="/login"><button className='button-login'>LOGIN</button></a>
          </>
        )}
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
    
    );
  };

export default Navbar