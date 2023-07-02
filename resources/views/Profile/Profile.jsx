import axios from 'axios'; // Importo Axios per le chiamata API
import { useState } from 'react'; // Importo useState che gestisce lo stato delle mie variabili
import { useNavigate } from 'react-router-dom'; // Importo useNavigate che mi permette di reindirizzare l'utente in un'altra rotta del mio sito


// Importo le icone
import {MdLogout, MdDarkMode, MdAccountCircle} from 'react-icons/md'
import {IoLogoGameControllerA} from 'react-icons/io'

// Importo i componenti dei relativi pulsanti
import Account from '../../js/components/Account/Account';
import VideoGames from '../../js/components/VideoGames/VideoGames';


import './Profile.css'

import { motion } from 'framer-motion'

const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedTab, setSelectedTab] = useState('account')
    
    const navigate = useNavigate();

    
    const logOut = async (event) => {
        event.preventDefault();
        try {
          await axios.post('https://dontnod-production.up.railway.app/api/logout');
          // await axios.post('http://127.0.0.1:8000/api/logout');
  
          localStorage.setItem('isLoggedIn', 'false');
          localStorage.removeItem('userId')
          navigate('/login')
          setIsLoggedIn(false)
          window.location.reload();
        }
        catch(error) {
          console.error(error)
        }
      }
    
      // Creo la variabile che conterrà i rispettivi componenti
      let content;
      
      // Creo la logica secondo la quale, in base al valore di "selectedTab", viene restituito il rispettivo componente
      if(selectedTab === 'account') {
        content = <Account />
      } else if (selectedTab === 'games') {
        content = <VideoGames />
      } else {
        content = "null";
      }

    return (
        <motion.div className='profile' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='profile--text'>
            <h1>Account <span style={{ color: `#009B96`}}>Settings</span></h1>
            <p>Change your profile and account settings</p>
        </div>
        <div className='profile--container'>
            <div className='profile--sections'>
              <button  onClick={() => setSelectedTab('account')} > <MdAccountCircle className='profile--sections--icon'/> Account </button>
              <button onClick={() => setSelectedTab('games')}> <IoLogoGameControllerA className='profile--sections--icon' /> Games </button>
              <button onClick={logOut}> <MdLogout className='profile--sections--icon' /> Logout </button>
            </div>
        <div className='profile--sections--details'>
        {selectedTab && content}
        </div>
        </div>
        </motion.div>
    )
}

export default Profile;