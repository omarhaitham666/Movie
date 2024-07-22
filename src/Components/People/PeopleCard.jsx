import React from 'react'
import { Link } from 'react-router-dom';

function PeopleCard({item}) {
const{id,name,profile_path,popularity}=item;
const PeopleImageUrl = profile_path
? `https://image.tmdb.org/t/p/w500${profile_path}`
: 'path/to/default/image.jpg';
  return (
    <>
    <Link to={'PeopleView/'+id} className='text-decoration position-relative '>
         <div className="m-auto " style={{width: '20rem'}}>
  <img src={PeopleImageUrl} className="card-img-top img-fluid" alt={name}/>
  <h5 className="text-light text-center mt-2 ">{name}</h5>
  <h5 className='position-absolute span-rate text-light bg-primary'>{popularity}</h5>
  </div>
  </Link>
    </>
  )
}

export default PeopleCard;