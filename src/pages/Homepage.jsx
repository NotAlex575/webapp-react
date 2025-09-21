import axios from "axios"
import { useState, useEffect } from "react"
import Filmcard from "../components/Filmcard";

const Homepage = () => {

    //definizioni delle variabili di stato
    const [movies, setMovies] = useState([]);

    // function che recupera i film tramite chiamata ajax
    const fetchMovies = () => {
        axios.get("http://localhost:3000/movies")
        .then((resp) => {
            setMovies(resp.data);
            console.log(resp.data);
        })
        .catch((err) => console.log(err));
    };

    // utilizzo useEffect per recuperare la lista dei film
    useEffect(fetchMovies, []);

    return (
        <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Filmly</h1>
                        <h2>
                            <i>Film per i veri appassionati</i>
                        </h2>
                    </div>
                </div>
                <div className="row gy-3">
                    {movies.map(movie => {
                        const { id } = movie
                        return <Filmcard key={id} movie = {movie}></Filmcard>
                    })}
                </div>
            </div>
    )
}

export default Homepage