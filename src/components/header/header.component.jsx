import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.css';
import { auth } from '../../firebase/firebase.utils';
import { getAuth, signOut } from '@firebase/auth';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header = ({currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
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
      <CartIcon/>
    </div>
    {hidden?null : <CartDropdown/>}
  </div>
);
// the state refer to rootReducer
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
  currentUser,
  hidden 
});
export default connect(mapStateToProps)(Header);



