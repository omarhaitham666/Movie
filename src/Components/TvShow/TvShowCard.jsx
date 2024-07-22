import React from 'react'
import { Link } from 'react-router-dom';

function TvShowCard({item}) {
    let{id,name,poster_path,vote_average}=item;
    const tvImageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'path/to/default/image.jpg';
  return (
    <>
    <Link to={'TvShowView/'+id} className='text-decoration position-relative'>
     <div className="m-auto " style={{width: '20rem'}}>
  <img src={tvImageUrl} className="card-img-top" alt={name}/>
    <h5 className="text-light text-center mt-2 ">{name}</h5>
    <h5 className='position-absolute span-rate text-light bg-primary'>{vote_average}</h5>
  </div>
  </Link>
    </>
  )
}

export default TvShowCard;