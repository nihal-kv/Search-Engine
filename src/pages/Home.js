import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/logo-e-search.png'
import React from 'react'
import Input from '../components/Input';

const Home = () => {
  return (
    <div className='home'>
      
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/' className='home__headerLink'>About</Link>
          <Link to='/' className='home__headerLink'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/' className='home__headerLink'>Email</Link>
          <Link to='/' className='home__headerLink'>Images</Link>
          <div className='home__headerRightIcons'><AppsIcon/></div>
          <div className='home__headerRightIcons'><AccountCircleIcon/></div>
        </div>
      </div>
      <div className='home__body'>
          <img src={logo} alt='google-logo'/>
          <div className='home__inputContainer'>
            <Input />
          </div>
      </div>
    </div>
  )
}

export default Home
