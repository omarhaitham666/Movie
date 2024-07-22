import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomeDetails from './HomeDetails';

function HomeView() {
    const{id}=useParams();
    const[homeReview,setHomeReview]=useState();
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3f7982066fb03466b8dfedf8d2775561`)
        .then((res)=>{
            setHomeReview(res.data)
        })
        .catch((error)=>{
            Swal.fire({
                title: error.code ?? 'error',
                text: error.message,
                icon: 'error',
              });
        })
    })
    
  return (
  homeReview&& <HomeDetails home={homeReview} />
  )
}

export default HomeView;