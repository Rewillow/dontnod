import './SignUp.css'


const SignUp = () => {
    
    return (
        <form action='login' method='POST' className='signup'>
            <div className='signup--container'>
                <div className='signup--elements'>
                   <div className='signup--container--input' >
                   <div className='signup--field'>
                   <input type='email' placeholder='Email' name='email' className='signup--field--email'></input>
                   <input type='password' placeholder='Password' name='password'></input>
                   <button className='signup--field--button'>SIGN UP</button>
                   <p className='signup--field--signup'>Do you already have an account? <a href='/login'>Click here!</a></p>
                   </div>
                   </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp