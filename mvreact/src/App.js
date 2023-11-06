import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';  
function App() {
  const [movies, setMovies] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) {
      setSlidesToShow(5);
    } else if (screenWidth > 992) {
      setSlidesToShow(4);
    } else if (screenWidth > 768) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(1);
    }
  };
  useEffect(() => {
    const apiKey = 'bbfec650995ca99d8cc06d74fe824a13'; 
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        const moviesData = data.results; 
        setMovies(moviesData);
      })
      .catch(err => console.error('error: ' + err));
      updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    
  };
  const handleCommentSubmit = () => {
    // Manejar la lógica para enviar el comentario
    // Puedes realizar acciones como enviar la información a un servidor o realizar otras operaciones con el comentario
    console.log('Comentario enviado:', comment);
    setComment(''); // Limpiar el campo de comentario después de enviar
    const [comment, setComment] = useState(''); // Nuevo estado para el comentario

    const handleCommentChange = (event) => {
      setComment(event.target.value); // Actualizar el estado del comentario cuando cambia el input
    };
  
  };

  return (
    <div>
      
      <div className="navv">
        <h1>AgendarM</h1>
        <button className="btn">Iniciar Sesión</button>
        <button className="btn">Mis comentarios</button>
      </div>

      <Slider {...sliderSettings} className="movie-carousel">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="intr">
        <h1>Dejanos tu comentario</h1>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario"
        />
        <br /><br />
        <button type="button" id="jsonbtn" onClick={handleCommentSubmit}>
          Enviar
        </button>
        <p id="jsontext">{comment}</p>
      </div>
    </div>
  );
}

export default App;

