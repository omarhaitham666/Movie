import React from 'react'
import { Link } from 'react-router-dom';

function Card({item}) {
  let title="";
  item.title?title = item.title:title =item.name
  let{poster_path,id,vote_average}=item;
  // const imageUrl=`/gKkl37BQuKTanygYQG1pyYgLVgf.jpg${poster_path}`;


  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'path/to/default/image.jpg';
  return (
   <>
   <Link to={'MovieView/'+id} className='text-decoration position-relative'>
   <div className="m-auto "  style={{width: '20rem'}} >
  <img src={imageUrl} className="card-img-top" alt={title}/>
    <h5 className="text-light text-center mt-2 ">{title}</h5>
    <h5 className='position-absolute span-rate text-light bg-primary'>{vote_average}</h5>
  </div>
  </Link>
   </>
  )
}

export default Card;