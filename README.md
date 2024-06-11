# IL PROGETTO
<p>L'idea di realizzare un sito web dedicato all'azienda sviluppatrice di videogiochi <strong>Don't Nod</strong>, nasce dalla consegna del progetto finale presente nel master in Full-Stack Development di <strong>start2impact</strong>.</p>
<p>Allo studente, veniva richiesto di scegliere un'azienda realmente esistente e di realizzare per questa un sito, che avesse sia un lato Front-End, che Back-End.</p>

## LA SCELTA
<p>Il motivo che ha portato a scegliere la Don't Nod è rintracciabile nella mia passione per i videogiochi. Tra le numerose opere che ho potuto apprezzare nel tempo e che hanno conquistato un posto importante nella mia esperienza da videogiocatore,
c'è senza ombra di dubbio <strong>Life Is Strange</strong>. Un titolo alla quale sono davvero legato.</p>
<p>A partire da questo, ho poi recuperato altri prodotti realizzati dall'azienda e che mi hanno convinto sempre di più nel voler realizzare un sito per loro.</p>

## LE TECNOLOGIE
Le tecnologie scelte e usate sono state:
<ul>
  <li><strong>React</strong> per il front-end.</li>
  <li><strong>CSS</strong> per gli stili.</li>
  <li><strong>Node.js</strong> per il back-end.</li>
  <li><strong>MySQL</strong> per la gestione del database.</li>
</ul>

## IL SITO
## FRONT-END
<p>Il design del sito è nato prima su <strong>Figma</strong>, dove sono stati stabilite anche le varie connessioni tra le pagine presenti.</p>
<p>L'utente, all'accesso, viene accolto da un tasto play e come sfondo un'immagine dal gioco <strong>Life Is Strange</strong>. Un modo per rendere più accattivante e desiderabile il desiderio di scoprire un'importante realtà come 
  quella della Don't Nod.</p>
<p>Dopo di che, si ha la schermata "<strong>Home</strong>". Qui, oltre al logo dell'azienda, è presente una panoramica di quelle che sono le piattaforme videoludiche supportate e uno slider con immagini rappresentative tratte dai videogiochi
sviluppati. A fine pagina invece, una breve ma esaustiva descrizione della Don't Nod.</p>
<p>Nella sezione "<strong>Games</strong>", c'è la lista completa dei videogiochi sin ora realizzati. Per ognuno di essi, c'è un'immagine identificativa da un lato, mentre dall'altro il rispettivo logo, l'inizio di una descrizione e 
le piattaforme su cui è disponibile. Se si sceglie di volerne sapere di più, c'è l'apposito bottone che rimanda a una pagina ancora più specifica.</p>
<p>In questa troviamo un wallpaper ad accogliere l'utente, il logo del titolo, la descrizione completa, le piattaforme viste in precedenza e un tasto per poter vedere comodamente il trailer ufficiale.</p>
<p>La sezione "<strong>About Us</strong>" è stata realizzata con l'ausilio della libreria react-vertical-timeline-component. La particolarità di quest'ultima, oltre a una completa personalizzazione, è l'essere già strutturata, di default, 
  in modalità responsive, così da adattarsi automaticamente ai piccoli e grandi schermi. Qui è raccontata la storia dell'azienda attraverso le date più importanti.</p>
  <p>L'ultima sezione è quella dei "<strong>Minigames</strong>" accessibile però solo all'utente registrato. Per chi decide di creare un account, è possibile divertirsi con semplici giochi legati all'universo Don't Nod.</p>
  <p>Inoltre, nella sezione profilo personale disponibile dopo l'accesso, è possibile indicare quali sono i titoli preferiti attraverso la piccola icona di un cuore: vuota quando è deselezionata, riempita quando invece viene selezionata.</p>
  
## BACK-END
<p>Spostandoci sul lato server, oltre alla creazione delle varie logiche, è importante sottolineare l'aspetto relativo alla registrazione e accesso dell'utente, con focus sulla protezione dei dati. Nella fattispecie, per crittografare le password è intervenuta la libreria bcrypt. 
  É uno strumento perfetto per l'hashing di questo tipo di dati, rendendo difficili gli attacchi indesiderati.</p>
<p>Oltre alla libreria appena citata, va menzionata anche jsonwebtoken. Questa si occupa dei token, che sono uno strumento ormai standardizzato per l'invio di dati tra due parti. Non è utile solo a verificare l'autenticità delle informazioni inviate, 
  ma verifica anche che non siano state compromesse durante il "viaggio".</p>
