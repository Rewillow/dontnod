import { useEffect, useState } from 'react'
import axios from 'axios';
import './Account.css'


const Account = () => {
    const [user, setUser] = useState(null);

    useEffect (() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/user');
                setUser(response.data)
                const userId = response.data.id;
                localStorage.setItem('userId', userId);
            } catch(error) {
                console.error(error)
            }
        }
        fetchUserDetails();
    }, [])

    const defaultUser = {
        name: '',
        email: '',
        password: ''
    }

    return (
        <div className='account'>
            <h2>General Info</h2>
            <p>In this section you can find all the details of your account</p>
        <div className='account--input'>
        <form>
            <label>Username *</label>
            <input type='text' value={(user && user.name) || defaultUser.name} readOnly></input>
            <label>Email *</label>
            <input type='text' value={(user && user.email) || defaultUser.email} readOnly></input>
            <label>Password *</label>
            <input type='password' value={'***********'} readOnly></input>
        </form>
        </div>
        <p>* <span>You can not modify the input values!</span></p>
        </div>
    )
}

export default Account