import React from 'react'

function PeopleDetails({people}) {
    const{name,biography,profile_path,popularity,known_for_department}=people;
    const PeopleUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : 'path/to/default/image.jpg';
  return (
    <>
    <div className="container">
    <div className="row m-3 mt-4">
        <div className="col-5 m-auto">
            <img src={PeopleUrl} alt={name} className='w-100 img-fluid' />
        </div>
        <div className="col-md-7 text-color mt-3 ">
            <div className='text-light text-center mt-5'>
            <h1>{name}</h1>
            <p><strong>Popularity :</strong> {popularity}</p>
            <p><strong>Known for  :</strong> {known_for_department}</p>
            <h5>biography : {biography}</h5>
            </div>
        </div>
    </div>
</div>

</>
  )
}

export default PeopleDetails;