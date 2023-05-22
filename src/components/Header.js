import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className='header'>
        <span>Contex API reactjs </span>
        <ul className='nav'>
            <li>
                <Link to='/'>Home page</Link>
            </li>
            <li>
                <Link to='/cart'>cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;
