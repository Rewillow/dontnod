import './VideoGames.css'
import listVideogames from './listVideogames';

// Importo le icone 
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useState, useEffect } from 'react'


const VideoGames = () => {
  
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const storedGameSelected = localStorage.getItem(`gameSelected_${userId}`);
    const [gameSelected, setGameSelected] = useState(
      storedGameSelected ? JSON.parse(storedGameSelected) : []
    );
    


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
    
      useEffect(() => {
        localStorage.setItem(`gameSelected_${userId}`, JSON.stringify(gameSelected));
      }, [gameSelected, userId]);
      

    
      return (
        <div className='videogames'>
          <h2>Don't Nod Videogames</h2>
          <p>These are all our video games. Which are your favorites?</p>
          <div className='videogames--list'>
            {listVideogames.map( game => (
              <button key={game.id} onClick={() => handleGameSelected(game.id)} >
                <img src={game.path} alt={game.logo}/> {gameSelected.includes(game.id) ? ( <AiFillHeart className='videogames--list--icon' /> ) : ( <AiOutlineHeart className='videogames--list--icon' /> )}
              </button>
            ))}
          </div>
        </div>
      );
    };

export default VideoGames

