import React from 'react'
import { Link } from 'react-router-dom';

function HomeCard({item}) {
    let{id,title,poster_path,vote_average}=item;
    const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'path/to/default/image.jpg';
  return (
    
    <>
    <Link to={'HomeView/'+id} className='text-decoration position-relative' >
  <div className="m-auto" style={{width: '20rem'}}>
  <img src={posterUrl} className="card-img-top" alt={title}/>
    <h5 className="text-light text-center ">{title}</h5>
    <h5 className='position-absolute span-rate text-light bg-primary'>{vote_average}</h5>
  </div>
  </Link>
    </>
  )
}

export default HomeCard;