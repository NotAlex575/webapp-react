 esercizio di oggi: Setup Web App React
 
 repo: webapp-react 
 
 ma lavoreremo anche su webapp-express (la stessa di ieri)
 
 ### Esercizio
 
 Ora è il momento di prepararci al frontend della nostra Web App!
 
 MILESTONE 0 
 
 
Ragionare e preparare uno schemino per impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props.

MILESTONE 1

Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

MILESTONE 2

Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
   
La home, in cui mostreremo la lista dei film
La pagina di dettaglio di un singolo film

MILESTONE 3

Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS
Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

### Bonus

Curare l’aspetto estetico della vostra applicazione
Realizzare un modulo css da importare in una componente



___________________________________________________________

creiamo lo schemino per strutturare il lavoro:


app.jsx
-   Layout (contenuto visibile in tutte le pagine) -> Navbar + content (homepage, about, ...)
-   -   router
-   -   -   homepage
-   -   -   -   Lista Film completi (router -> "/") (props: book)
-   -   -   -   Lista Film singolo (router -> ":id") (props: book)


___________________________________________________________

eseguiamo la milestone 1, installando tutti i package richiesti

creiamo una cartella layouts in src, e creiamo un file chiamato Defaultlayout.jsx, che sarà il contenuto visibile in tutte le pagine (ci sarà una navbar contenente tutti i link cliccabili e l'outlet che sarebbe il contenuto sotto alla navbar)

in app.jsx inseriamo tutti gli import necessari, e creiamo lo scheletro del BrowserRouter con il BrowserRouter > Routes > Route element Defaultlayout

creiamo uno scheletro di 2 pagine (1 homepage e l'altra oneMovie) e le inseriamo in una route all'interno della route di Defaultlayout (con le loro route definite)

all'interno del file webapp-react (dove ci sta il back-end) inseriamo il .env, per permettere al front-end e al back-end la comunicazione tra loro (oltre che avere una sicurezza a livello di data sharing)

nella homepage iniziamo a creare un container, che contiene titolo pagina, descrizione e card contenenti i film

per aggiungere alle card il contenuto della value presenti nel database, implementiamo

import axios from "axios"
import { useState, useEffect } from "react"

inseriamo al suo interno le variabili di stato

const [movie, setMovies] = useState([]);

inseriamo la function che recupera i film tramite chiamata ajax (const fetchMovies)