import './SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();
      
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
      
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/register', {
            name: name,
            email: email,
            password: password,
          });

          navigate("/home")
          console.log(response.data);
          
        } 
        catch (error) {
          console.error(error);
        }
      };
      
      
      
    
    return (
        <form className='signup'>
            <div className='signup--container'>
                <div className='signup--elements'>
                   <div className='signup--container--input' >
                   <div className='signup--field'>
                   <input type='text' placeholder='Username' name='name' className='signup--field--email'></input>
                   <input type='text' placeholder='Email' name='email' className='signup--field--email'></input>
                   <input type='password' placeholder='Password' name='password'></input>
                   <button className='signup--field--button' onClick={registerUser}>SIGN UP</button>
                   <p className='signup--field--signup'>Do you already have an account? <a href='/login'>Click here!</a></p>
                   </div>
                   </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp