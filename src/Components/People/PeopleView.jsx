import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PeopleDetails from './PeopleDetails';

function PeopleView() {
    const{id}=useParams();
    const[peopleReview,setPeopleReview]=useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=3f7982066fb03466b8dfedf8d2775561`)
        .then((res)=>{
            setPeopleReview(res.data)
        })
        .catch((error)=>{
            Swal.fire({
                title: error.code ?? 'error',
                text: error.message,
                icon: 'error',
              });
        })
    },[id])
    
  return (
    peopleReview&& <PeopleDetails people={peopleReview} />
  )
}

export default PeopleView;