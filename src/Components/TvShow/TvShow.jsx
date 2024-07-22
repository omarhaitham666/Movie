import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import TvShowCard from './TvShowCard';
import Card from '../Movies/Card';

function TvShow() {
    const [tvShowList,setTvList]=useState([]);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=3f7982066fb03466b8dfedf8d2775561')
        .then((res)=>{
            setTvList(res.data.results||[])
        })
        .catch((error)=>{
            Swal.fire({
                title: error.code ?? 'error',
                text: error.message,
                icon: 'error',
              });
        })
    },[]);
  return (
    <>
    <h1 className='text-light text-center'>TvShows</h1>
    <div className="container">
      <div className="row">
        {tvShowList.length > 0 ? (
          tvShowList.map((tv) => (
            <div className="col-md-4 g-3 " key={tv.id}>
              <Card item={tv} />
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
    </>
  )
}

export default TvShow;