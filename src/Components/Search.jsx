import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Card from './Movies/Card';
import { MovieContext } from './MovieContext';
function Search() {
    let myWord=useContext(MovieContext)
    const [searchWord,setSearchWord]=useState("ali");
    console.log("from search",myWord.word);
    const [searchList,setSearchList]=useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3f7982066fb03466b8dfedf8d2775561&query=${myWord.word}`)
        .then((res)=>{
            setSearchList(res.data.results)
        })
        .catch((error)=>{
            Swal.fire({
                title: error.code ?? 'error',
                text: error.message,
                icon: 'error',
            });
        })
    },[myWord.word])
    
    
  return (
    <>
            <h1 className='text-light text-center'>Search</h1>
            <div className="container">
                <div className="row">
                    {Array.isArray(searchList) && searchList.length > 0 ? (
                        searchList.map((item) => (
                            <div className="col-md-4 g-2 " key={item.id}>
                                <Card item={item} />
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

export default Search;