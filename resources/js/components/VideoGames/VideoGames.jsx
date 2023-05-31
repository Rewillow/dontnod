import './VideoGames.css'


// Importo i loghi dei videogiochi
import RememberMeLogo from '../../../../public/assets/RememberMe-Logo.png'
import LifeIsStrangeLogo from '../../../../public/assets/LifeIsStrange-Logo.png'
import VampyrLogo from '../../../../public/assets/Vampyr-Logo.png'
import CaptainSpiritLogo from '../../../../public/assets/CaptainSpirit-Logo.png'
import LifeIsStrange2Logo from '../../../../public/assets/LifeIsStrange2-Logo.png'
import TellMweWhyLogo from '../../../../public/assets/TellMeWhy-Logo.png'
import TwinMirrorLogo from '../../../../public/assets/TwinMirror-Logo.png'
import GerdaLogo from '../../../../public/assets/Gerda-Logo.png'
import BanishersLogo from '../../../../public/assets/Banishers-Logo.png'
import HarmonyLogo from '../../../../public/assets/Harmony-Logo.png'

// Importo le icone 
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useState, useEffect } from 'react'


const VideoGames = () => {

    const storedGameSelected = localStorage.getItem('gameSelected'); // In questo modo recupero il valore memorizzato nel "localStorage"
    const [gameSelected, setGameSelected] = useState( // Inizializzo lo stato "gameSelected" recuperando il valore dal "localStorage"
      storedGameSelected ? JSON.parse(storedGameSelected) : []
    );

    const games = [ // Creo il mio array contenente i loghi dei videogiochi
        {
            index: 1,
            logo: RememberMeLogo
        },
        {
            index: 2,
            logo: LifeIsStrangeLogo
        },
        {
            index: 3,
            logo: VampyrLogo
        },
        {
            index: 4,
            logo: CaptainSpiritLogo
        },
        {
            index: 5,
            logo: LifeIsStrange2Logo
        },
        {
            index: 6,
            logo: TellMweWhyLogo
        },
        {
            index: 7,
            logo: TwinMirrorLogo
        },
        {
            index: 8,
            logo: GerdaLogo
        },
        {
            index: 9,
            logo: BanishersLogo
        },
        {
            index: 10,
            logo: HarmonyLogo
        }
    ]

    // Questa funzione si occupa della selezione e deselezione dei videogiochi
    const handleGameSelected = (index) => { // La funzione viene inizializzata con un elemento "index", che fa riferimento all'index di ogni videogioco 
        setGameSelected((prevSelected) => { // Viene poi richiamata la funzione "setGameSelected", utile ad aggiornare lo stato di "gameSelected". Come parametro accetta una "callback", che definisce lo stato precedente, ovvero il valore.
          if (prevSelected.includes(index)) { // Con questa condizione, se l'indice è presente nell'array, vuol dire che il gioco è stato selezionato in precedenza e quindi deve essere deselezionato. Viene quindi restituito un nuovo array dove non è più presente l'elemento deselezionato.
            return prevSelected.filter((item) => item !== index);
          } else {
            return [...prevSelected, index];
          }
        });
      };
    
      useEffect(() => { // Ogni volta che l'array viene modificato viene aggiornato il localStorage
        localStorage.setItem('gameSelected', JSON.stringify(gameSelected));
      }, [gameSelected]);
    
      return (
        <div className='videogames'>
          <h2>Don't Nod Videogames</h2>
          <p>These are all our video games. Which are your favorites?</p>
          <div className='videogames--list'>
            {games.map((game) => (
              <button key={game.index} onClick={() => handleGameSelected(game.index)} >
                <img src={game.logo}/> {gameSelected.includes(game.index) ? ( <AiFillHeart className='videogames--list--icon' /> ) : ( <AiOutlineHeart className='videogames--list--icon' /> )}
              </button>
            ))}
          </div>
        </div>
      );
    };

export default VideoGames



//     const storedGameSelected = localStorage.getItem("gameSelected")
//     const [gameSelected, setGameSelected] = useState(storedGameSelected)

    
//   const dontGame = () => {
//     setGameSelected((current) => (current === 'gameSelected' ? 'noGameSelected' : 'gameSelected'))
//   }

//   localStorage.setItem('gameSelected', gameSelected)