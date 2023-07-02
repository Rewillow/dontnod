import './Login.css' // Importo il foglio di stile

import axios from 'axios' // Importo axios per effettuare le chiamate API

import { useNavigate } from 'react-router-dom' // Importo useNavigate
import { useState, useEffect } from 'react' // Importo useState e useEffect

import Loading from "../../../public/assets/Loading.gif" // Importo l'icona di caricamento

import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina 


const Login = () => {
    const [isLoading, setIsLoading] = useState(false) // Creo la costante utilizzando useState e impostando il valore iniziale uguale a "false"
    const navigate = useNavigate(); // Creo la costante "navigate" richiamando useNavigate
    const [errorMessage, setErrorMessage] = useState('') // Creo la costante utile al messaggio di errore impostando il valore iniziale uguale a una stringa vuota.

    useEffect(() => { // Richiamo useEffect per fare in modo che venga mostrato il relativo errore e dopo 5s questo scomparirà. Per fare ciò sono stati utilizzate le funzioni "setTimeout" e "clearTimeout"
    if (errorMessage) {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timeout);
    }
    }, [errorMessage]);


    // Chiamata POST per effettuare il LOGIN
    const loginUser = async (event) => {
      event.preventDefault(); // Uso "preventDefault" per prevenire il comportomanto di default di un pulsante.
      const email = document.querySelector('input[name="email"]').value; // Questa costante ritorna il valore presente nell'input "email"
      const password = document.querySelector('input[name="password"]').value; // Questa costante ritorna il valore presente nell'input "password"
    
      try {
        setIsLoading(true); // Impostando il valore di setIsLoading uguale a "true", viene avviato il processo di caricamento 
        // Viene simulato un ritardo di 3 secondi attraverso la funzione "setTimeout"
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Viene eseguita la chiamata API per effettuare il login. Non essendo una chiamata in "local", deve essere specificato l'indirizzo corretto relativo al sito di hosting.
        await axios.post('https://dontnod-production.up.railway.app/api/login', {
          email: email, // Uno dei campi che deve essere riempito per effettuare il login 
          password: password // Uno dei campi che deve essere riempito per effettuare il login 
        });

        // Chiamata API ma in "local"
        // await axios.post('http://127.0.0.1:8000/api/login', { 
        //   email: email,
        //   password: password
        // });

        setIsLoading(false); // Dopo i 3s viene nascosto il caricamento, in questo caso la GIF
    
        navigate("/home"); // L'utente viene reindirzzato alla home
        localStorage.setItem('isLoggedIn', true) // Nel localStorage viene impostato il valore di "isLoggedIn" uguale a "true", il che vuol dire che l'utente ha effettuato il login.
        window.location.reload(); // Viene riaggiornata la pagina
 
      } catch (error) { // Viene catturato l'errore da "catch"
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message); 
        }
        setIsLoading(false); // Il messaggio viene nascosto dopo 3s, ma in questo caso riguarda l'errore
      }
    };
    
    return (
      // Specifico il tipo di transizione impostando i valori di "inizial, animate e exit"
        <motion.form className='login' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> 
            <div className='login--container'>
                <div className='login--elements'>
                   <div className='login--container--input' >
                   <div className='login--field'>
                   <input type='email' placeholder='Email' name='email' className='login--field--email'></input>
                   <input type='password' placeholder='Password' name='password'></input>
                   {/* Specifico le caratteristiche di stile del messaggio di errore */}
                   {errorMessage && <p style={{ color: `red`, fontWeight: `regular`, marginTop: `7px`, fontSize: `14px` }}>{errorMessage}</p>}
                   <button className='login--field--button' onClick={loginUser}>LOGIN</button>
                   <p className='login--field--signup'>Not registered yet? <a href='/signup'>Click here!</a></p>
                   {/* Al richiamo del messaggio di caricamento, viene mostrata l'apposita GIF */}
                   {isLoading && <img src={Loading} className='login--loading--icon'/>}
                   </div>
                   </div>
                </div>
            </div>
        </motion.form>
    )
}

export default Login