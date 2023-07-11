import './SignUp.css' // Importo il file di stile

import axios from 'axios' // Importo axios

import { useState, useEffect } from 'react'; // Importo useState che gestisce lo stato delle variabili e useEffect 
import { useNavigate } from 'react-router-dom'; // Importo useNavigate che permette di reindirizzare l'utente in un'altra rotta del mio sito

import Loading from "../../../public/assets/Loading.gif" // Importo la GIF di caricamento

import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina


const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false) // // Creo la costante utilizzando useState e impostando il valore iniziale uguale a "false"
    const [errorMessage, setErrorMessage] = useState("") // Creo la costante che gestisce il messaggio di errore, usando useState, e impostando il valore iniziale uguale a una stringa vuota
    const navigate = useNavigate(); // Creo la costante utilizzando useNavigate
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => { // Richiamo useEffect per fare in modo che venga mostrato il relativo errore e dopo 5s questo scomparirà. Per fare ciò sono stati utilizzate le funzioni "setTimeout" e "clearTimeout"
      if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
  
      return () => clearTimeout(timeout);
      }
      }, [errorMessage]);

    const registerUser = async (event) => {
        event.preventDefault(); // Uso "preventDefault" per prevenire il comportomanto di default di un pulsante.
      
        const name = document.querySelector('input[name="name"]').value; // Questa costante ritorna il valore presente nell'input "name"
        const email = document.querySelector('input[name="email"]').value; // Questa costante ritorna il valore presente nell'input "email"
        const password = document.querySelector('input[name="password"]').value; // Questa costante ritorna il valore presente nell'input "password"
      
        try {
          setIsDisabled(!isDisabled)
          setIsLoading(true); // Impostando il valore di setIsLoading uguale a "true", viene avviato il processo di caricamento 
          // Viene simulato un ritardo di 3 secondi attraverso la funzione "setTimeout"
          await new Promise((resolve) => setTimeout(resolve, 3000));

          await axios.post('http://127.0.0.1:8000/api/register', {
            name: name,
            email: email,
            password: password,
          });

          setIsLoading(false); // Dopo i 3s viene nascosto il caricamento, in questo caso la GIF

          navigate("/home"); // L'utente viene reindirzzato alla home
          localStorage.setItem('isLoggedIn', 'true'); // Nel localStorage viene impostato il valore di "isLoggedIn" uguale a "true", il che vuol dire che l'utente ha effettuato la registrazione con successo e quindi è loggato.
          window.location.reload(); // Viene riaggiornata la pagina
        } 
        catch (error) { // Viene catturato l'errore da "catch"

          setIsLoading(false); // Il messaggio viene nascosto dopo 3s, ma in questo caso riguarda l'errore

          if(error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message)
            } 
        }
      };
      
    return (
      // Specifico il tipo di transizione impostando i valori di "inizial, animate e exit"
        <motion.form className='signup' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className='signup--container'>
                <div className='signup--elements'>
                   <div className='signup--container--input' >
                   <div className='signup--field'>
                   <input type='text' placeholder='Username' name='name' className='signup--field--email' disabled={isDisabled}></input>
                   <input type='text' placeholder='Email' name='email' className='signup--field--email' disabled={isDisabled}></input>
                   <input type='password' placeholder='Password' name='password' disabled={isDisabled}></input>
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