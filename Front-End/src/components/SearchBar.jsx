import React,{useState} from 'react'

import {XIcon, SearchIcon} from '@heroicons/react/solid'
import SearchResults from './SearchResults';
import { searchSymbols } from '../api/StockApi';
const SearchBar = () => {

  const [input,setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]); 
 
  const clear = () =>{
    setInput("");
    setBestMatches([]);
  }

  const updateBestMatches = async () =>{
    try {
      if(input){
        const SearchResults = await  searchSymbols(input);
        const result = SearchResults.result;
        setBestMatches(result)
      }
    }
    catch(error) {
      setBestMatches([])
      console.log(error)
    }
  }
  return (
    <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
      <input 
        type="text" 
        value={input} 
        className='w-full px-4 py-2 focus:outline-none rounded-md' 
        placeholder='Search stocks...' 
        onChange={(e) =>{
          setInput(e.target.value)
        }}
        onKeyPress={(e) =>{
          if(e.key === "Enter"){
            updateBestMatches();
          }
        }}
        />

        {input && (
        <button onClick={clear} className='m-1'>
          <XIcon className='h-4 w-4 fill-gray-500'/>
        </button>
        )}

        <button  onClick={updateBestMatches} className='h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2'>
          <SearchIcon className='h-4 w-4 fill-gray-100'/>
        </button>

        {input && bestMatches.length>0 ? <SearchResults results={bestMatches}/> : null}

    </div>
  )
}

export default SearchBar
