import axios from "axios"
import { useState, useEffect } from "react"

const Homepage = () => {

    //definizioni delle variabili di stato
    const [movie, setMovies] = useState([]);

    // function che recupera i film tramite chiamata ajax
    const fetchMovies = () => {
        axios.get("http://localhost:3000/movies")
        .then((resp) => {
            setBooks(resp.data);
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
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img 
                                src = "./img/sample.jpg" 
                                className="img-fluid"
                                alt = "film"
                            /> 
                            <div className="overlay">
                                <h2 className="text-center my-3">titolo</h2>
                                <p className="text-center">autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img 
                                src = "./img/sample.jpg" 
                                className="img-fluid"
                                alt = "film"
                            /> 
                            <div className="overlay">
                                <h2 className="text-center my-3">titolo</h2>
                                <p className="text-center">autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img 
                                src = "./img/sample.jpg" 
                                className="img-fluid"
                                alt = "film"
                            /> 
                            <div className="overlay">
                                <h2 className="text-center my-3">titolo</h2>
                                <p className="text-center">autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img 
                                src = "./img/sample.jpg" 
                                className="img-fluid"
                                alt = "film"
                            /> 
                            <div className="overlay">
                                <h2 className="text-center my-3">titolo</h2>
                                <p className="text-center">autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img 
                                src = "./img/sample.jpg" 
                                className="img-fluid"
                                alt = "film"
                            /> 
                            <div className="overlay">
                                <h2 className="text-center my-3">titolo</h2>
                                <p className="text-center">autore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Homepage