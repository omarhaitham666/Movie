import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Swal from 'sweetalert2';


// import React, { useEffect, useState } from 'react';

function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3f7982066fb03466b8dfedf8d2775561')
      .then((res) => {
        // console.log(res.data); 
        setMoviesList(res.data.results || []); 
      })
      .catch((error) => {
        Swal.fire({
          title: error.code ?? 'error',
          text: error.message,
          icon: 'error',
        });
      });
  }, []);

  return (
    <>
   
    <h1 className='text-center text-light'> Trending movies</h1>
    <div className="container">
      <div className="row">
        {moviesList.length > 0 ? (
          moviesList.map((movie) => (
            <div className=" col-md-4 g-3" key={movie.id}>
              <Card item={movie} />
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
   
   </>
  );
}

export default Movies;