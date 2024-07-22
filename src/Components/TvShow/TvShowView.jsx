import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import TvShowDetails from './TvShowDetails';

function TvShowView() {
    const{id}=useParams([]);
    const[tvShowReview,setTvShowReview]=useState();
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=3f7982066fb03466b8dfedf8d2775561`)
        .then((res)=>{
            setTvShowReview(res.data)
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
    tvShowReview&& <TvShowDetails tvShow={tvShowReview} />
  )
}

export default TvShowView;