import { useState } from 'react';
import './Navbar.css'

import Logo from '../../../../public/assets/dontnod.svg'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="Navbar">
        <a href='/home'><img src={Logo} className="nav-logo"></img></a>
        <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
          <a href="/games">Games</a>
          <a href="/about">About us</a>
        </div>
        <div className= "nav-buttons" >
        <a href="/signup"><button className='button-signup'>SIGN UP</button></a>
        <a href="/login"><button className='button-login'>LOGIN</button></a>
        </div> 
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
      </div>
    );
  };

export default Navbar