import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
    if (errorMessage) {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 7000);

    return () => clearTimeout(timeout);
    }
    }, [errorMessage]);


    // Chiamata POST per effettuare il LOGIN
    const loginUser = async(event) => {
        
        event.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        try {
            await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            });

            navigate ("/home");
            localStorage.setItem('isLoggedIn', 'true');
        }
        catch(error) {
            if(error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message)
            } 
        }
    }


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
                   </div>
                   </div>
                </div>
            </div>
        </form>
    )
}

export default Login