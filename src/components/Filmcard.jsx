const Filmcard = ({ movie }) => {
  const { title, image, genre, director } = movie
  return (
    <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
            <img 
                src = {image} 
                className="img-fluid"
                alt = {director}
            /> 
            <div className="overlay">
                <h2 className="text-center my-3">{title}</h2>
                <p className="text-center">{genre}</p>
            </div>
        </div>
    </div>
  )
}

export default Filmcard