import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.css';
import { auth } from '../../firebase/firebase.utils';
import { getAuth, signOut } from '@firebase/auth';
const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser?
        (
          <div className="option" onClick={()=>signOut(auth)}>
            SIGN OUT
          </div>
        ):
        (
          <Link className="option" to='/sign-in'>
             SIGN IN 
           </Link>
        )
      }
     
    </div>
  </div>
);

export default Header;



