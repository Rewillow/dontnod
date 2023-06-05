import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from "../../../public/assets/Loading.gif"


const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
    if (errorMessage) {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timeout);
    }
    }, [errorMessage]);


    // Chiamata POST per effettuare il LOGIN
    const loginUser = async (event) => {
        event.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
      
        try {
          // Avvia il messaggio di caricamento
          setIsLoading(true);
      
          // Simula un ritardo di 5 secondi
          await new Promise((resolve) => setTimeout(resolve, 3000));
      
          // Esegui la chiamata API
          await axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password
          });
      
          // Nascondi il messaggio di caricamento
          setIsLoading(false);
          navigate("/home");
          window.location.reload();
          localStorage.setItem('isLoggedIn', 'true');
        } catch (error) {
          if (error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message);
          }
          setIsLoading(false); // Assicurati di nascondere il messaggio di caricamento in caso di errore
        }
      };
      
      


    return (
        <form className='login'>
            <div className='login--container'>
                <div className='login--elements'>
                   <div className='login--container--input' >
                   <div className='login--field'>
                   <input type='email' placeholder='Email' name='email' className='login--field--email'></input>
                   <input type='password' placeholder='Password' name='password'></input>
                   {errorMessage && <p style={{ color: `red`, fontWeight: `regular`, marginTop: `7px`, fontSize: `14px` }}>{errorMessage}</p>}
                   <button className='login--field--button' onClick={loginUser}>LOGIN</button>
                   <p className='login--field--signup'>Not registered yet? <a href='/signup'>Click here!</a></p>
                   {isLoading && <img src={Loading} className='login--loading--icon'/>}
                   </div>
                   </div>
                </div>
            </div>
        </form>
    )
}

export default Login