
import { useState, useEffect, useContext } from 'react'

import API_KEY from '../keys'
import { AppContext } from '../context/AppContext';

const CONTEXT_KEY="0358b01e7d1d74f84";

const useGoogleSearch = (term) => {

  const [data, setData]=useState(null);
  const {setIsLoading}=useContext(AppContext);

  

  useEffect(()=>{
    
    const fetchData=async()=>{
        setIsLoading(true);
        try{
            const response= await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            const result= await response.json();
            
    
            setData(result);
            console.log(result);
        }
        catch(err){
            alert(err);
        }
        setIsLoading(false);
     }

    fetchData();
    
  }, [term])

  return {data};
}

export default useGoogleSearch
