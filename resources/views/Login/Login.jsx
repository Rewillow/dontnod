import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();

    const loginUser = async(event) => {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            });

            navigate ("/home");
        }

        catch(error) {
            console.error(error);
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
                   <button className='login--field--button' onClick={loginUser}>LOGIN</button>
                   <p className='login--field--signup'>Not registered yet? <a href='/signup'>Click here!</a></p>
                   <p className='login--field--forgot--password'>Forgot Password?</p>
                   </div>
                   </div>
                </div>
            </div>
        </form>
    )
}

export default Login