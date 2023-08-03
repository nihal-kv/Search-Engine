import './Input.css';

import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Input = ({hideButtons=false}) => {

    
  const {setTerm}=useContext(AppContext);
  const navigate=useNavigate();

  const [input, setInput]=useState('');

  const searchHandler=(event)=>{
    event.preventDefault();
    setTerm(input);

    navigate('/search');
    
  }

  const inputChangeHandler=(event)=>{
    setInput(event.target.value);
    
  }

  return (
    <form className='input' onSubmit={searchHandler}>
      <div className='input__input'>
        <SearchIcon/>
        <input value={input} onChange={inputChangeHandler}/>
        <MicIcon/>
      </div>
      {!hideButtons &&
      <div className='input__buttons'>
        <button type='submit' onClick={searchHandler}>E Search</button>
        <button onClick={searchHandler}>I'm feeling lucky</button>
      </div>
        }
    </form>
  )
}

export default Input;
