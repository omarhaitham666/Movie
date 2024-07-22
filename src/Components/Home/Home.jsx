import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import HomeCard from './HomeCard';


function Home() {
  const[allMovies , setAllMovies]=useState([]);


  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3f7982066fb03466b8dfedf8d2775561')
    .then((res)=>{
      console.log(res.data)
      setAllMovies(res.data.results||[]);
    })
    .catch((error)=>{
      Swal.fire({
        title: error.code ?? 'error',
        text: error.message,
        icon: 'error',
      });
    });
  },[]);
  return (
    <>
      <h1 className='text-center text-light'> All movies</h1>
      <div className="container">
        <div className="row">
          {allMovies.length > 0 ? (
            allMovies.map((all)=>(
              <div className="col-md-4 g-3"key={all.id}>
                <HomeCard  item={all} />
              </div>
            ))
          ):(
            <p className='text-center text-danger d-flex justify-content-center align-items-center'>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
export default Home;