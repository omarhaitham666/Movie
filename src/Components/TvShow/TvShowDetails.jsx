import React from 'react'

function TvShowDetails({tvShow}) {
    const{name,overview,poster_path,first_air_date,vote_average,genres,tagline,vote_count}=tvShow;
    const TvDetailsUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'path/to/default/image.jpg';
  return (
    <>
    <div className="container">
    <div className="row m-3 mt-4">
        <div className="col-5 m-auto">
            <img src={TvDetailsUrl} alt={name} className='w-100' />
        </div>
        <div className="col-md-7 text-color mt-5">
            <div className='text-light m-1 text-center'>
            <h1>{name}</h1>
            <h5>{tagline}</h5>
           <div className='m-3 d-flex justify-content-center gap-3'>
           {genres && genres.map((genre) => (
      <button key={genre.id} className="btn button-color">
        {genre.name}
      </button>
    ))}
           </div>
            <p><strong>Rate :</strong> {vote_average}</p>
            <p><strong>vote count :</strong> {vote_count}</p>
            <p><strong>Release Date:</strong> {first_air_date}</p>
            <h5>{overview}</h5>
            </div>
        </div>
    </div>
</div>

</>
  )
}

export default TvShowDetails;