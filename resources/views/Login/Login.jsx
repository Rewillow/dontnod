import './Login.css'
import axios from 'axios'


const Login = () => {

    
    return (
        <form className='login'>
            <div className='login--container'>
                <div className='login--elements'>
                   <div className='login--container--input' >
                   <div className='login--field'>
                   <input type='text' placeholder='Username' name='username' className='login--field--username'></input>
                   <input type='email' placeholder='Email' name='email' className='login--field--email'></input>
                   <input type='password' placeholder='Password' name='password'></input>
                   <button className='login--field--button'>LOGIN</button>
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