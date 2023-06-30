import './SignUp.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from "../../../public/assets/Loading.gif"

import { motion } from 'framer-motion'


const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
      if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
  
      return () => clearTimeout(timeout);
      }
      }, [errorMessage]);

    const registerUser = async (event) => {
        event.preventDefault();
      
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
      
        try {

          setIsLoading(true);
      
          // Simula un ritardo di 5 secondi
          await new Promise((resolve) => setTimeout(resolve, 3000));

          await axios.post('https://dontnod-production.up.railway.app/api/register', {
            name: name,
            email: email,
            password: password,
          });

          // await axios.post('http://127.0.0.1:8000/api/register', {
          //   name: name,
          //   email: email,
          //   password: password,
          // });

          setIsLoading(false);
          navigate("/home");
          localStorage.setItem('isLoggedIn', 'true');
          window.location.reload();
        } 
        catch (error) {
          setIsLoading(false);
          if(error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message)
            } 
        }
      };
      
      
      
    
    return (
        <motion.form className='signup' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className='signup--container'>
                <div className='signup--elements'>
                   <div className='signup--container--input' >
                   <div className='signup--field'>
                   <input type='text' placeholder='Username' name='name' className='signup--field--email'></input>
                   <input type='text' placeholder='Email' name='email' className='signup--field--email'></input>
                   <input type='password' placeholder='Password' name='password'></input>
                   {errorMessage && <p style={{ color: `red`, fontWeight: `light`, marginTop: `7px`, fontSize: `14px` }}>{errorMessage}</p>}
                   <button className='signup--field--button' onClick={registerUser}>SIGN UP</button>
                   <p className='signup--field--signup'>Do you already have an account? <a href='/login'>Click here!</a></p>
                   {isLoading && <img src={Loading} className='login--loading--icon'/>}
                   </div>
                   </div>
                </div>
            </div>
        </motion.form>
    )
}

export default SignUp