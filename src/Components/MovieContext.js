import React, { createContext, useState } from 'react'

export const MovieContext = createContext([])

export function MovieContextProvider(props) {
    let [word,setWord]=useState("")
    function changeWord (newWord){
        setWord(newWord);
    }
  return (
    <MovieContext.Provider value={{word,changeWord}}>
        {props.children}
    </MovieContext.Provider>
  )
}
