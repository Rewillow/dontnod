import './Account.css' // Importo il file di stile

import { useEffect, useState } from 'react' // Importo useState e useEffect

import axios from 'axios'; // Importo axios



const Account = () => {
    const [user, setUser] = useState(null); // Creo la costante che servirà a recuperare i dati degli utenti

    useEffect (() => {
        const fetchUserDetails = async () => {
            try {
                // Viene effettuata la chiamata API
                // const response = await axios.get('https://dontnod-production.up.railway.app/api/user');
                const response = await axios.get('http://127.0.0.1:8000/api/user');
                setUser(response.data) // Imposto il valore della costante inserendo i valori di "data" recuperati dalla chiamata API
                const userId = response.data.id; // Stabilisco il valore della costante "userId" ricavando i dati dalla chiamata API e nello specifico il valore di "id"
                localStorage.setItem('userId', userId); // Nel localStorage imposto il valore dell'id
            } catch(error) {
                console.error(error)
            }
        }
        fetchUserDetails();
    }, [])

    const defaultUser = { // Imposto i valori di default dei vari campi
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