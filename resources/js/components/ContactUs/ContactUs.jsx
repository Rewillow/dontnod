import { useEffect, useState } from 'react';
import './ContactUs.css'

import Loading from '../../../../public/assets/Loading.gif'

// Questo componente permette di mettersi in contatto con l'azienda. In questo caso si tratta di un form fittizio, a cui non è stato assegnato nessun metodo di invio.

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false)

    const handleSend = (e) => { // Per impedire il riaggiornamento della pagina al click del bottone "SEND"
        e.preventDefault();
        setIsLoading(true)
    }

    useEffect(() => {
        if (isLoading) {
          const timeout = setTimeout(() => {
            setIsLoading(false);
          }, 5000);
    
          return () => clearTimeout(timeout);
        }
      }, [isLoading]);

    return (
     <form className='contact-us'>
      <div className='contact-us--container'>
       <div className='contact-us--elements'>
        <h1>Contact <span style={{ color: `#009B96`}}>Us</span></h1>
        <p>Fill out the form to get in touch with us</p>
        <div className='contact-us--input'>
            <input type='text' placeholder='Title of message'></input>
            <div className='contact-us--input--informations'>
            <input type='text' placeholder='First Name'></input>
            <input type='text' placeholder='Last Name'></input>
            </div>    
            <textarea type='text' placeholder='Write what you want to tell'></textarea>   
        </div>
        <button className='contact-us--button' onClick={handleSend}>SEND {isLoading && <img src={Loading} className='contact-us--loading--icon'/>}</button>
        
       </div>
      </div>
     </form>
    ) 
}

export default ContactUs