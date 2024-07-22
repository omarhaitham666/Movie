import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import PeopleCard from './PeopleCard'

function People() {
    const[peopleList,setPeopleList]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/person/popular?api_key=3f7982066fb03466b8dfedf8d2775561')
        .then((res)=>{
            setPeopleList(res.data.results)
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
     <h1 className='text-light text-center'>Peoples</h1>
    <div className="container">
      <div className="row">
        {Array.isArray(peopleList) &&peopleList.length > 0 ? (
          peopleList.map((person) => (
            <div className="col-md-4 g-2 " key={person.id}>
              <PeopleCard item={person} />
            </div>
          ))
        ) : (
          <p className='text-center text-danger'>No movies found.</p>
        )}
      </div>
    </div>
    </>
  )
}

export default People;