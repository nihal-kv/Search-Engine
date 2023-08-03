import { Link } from 'react-router-dom';
import useGoogleSearch from '../components/useGoogleSearch';
import { AppContext } from '../context/AppContext';
import './Search.css';

import logo from '../assets/logo-e-search.png'

import React, { useContext} from 'react'
import Input from '../components/Input';
import Spinner from '../components/Spinner';

const Search = () => {

  const {term}=useContext(AppContext);
  const {data}=useGoogleSearch(term);
  const {isLoading}=useContext(AppContext);

  return (
    <div className='search'>
        <div className='search__header'>
          <Link to='/'>
            <img src={logo} alt='google-logo'  className='search__headerLogo'/>
          </Link>

          <div className='search__headerBody'>
            <Input hideButtons />
          </div>
        </div>
        {isLoading && <Spinner/>}
        {!isLoading && term && <div className='search__results'>
            <p className='search__resultsCount'>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>

            {data?.items.map((item, index)=>{
              return <div className='search__result' key={index}>
                <a href={item.link}>
                  {item.displayLink}
                </a>
                <a className='search__resultTitle' href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className='search__resultSnippet'>
                  {item.snippet}
                </p>
              </div>
            })}
        </div>}
    </div>
  )
}

export default Search
