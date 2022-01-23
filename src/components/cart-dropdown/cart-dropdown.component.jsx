import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';
import './cart-dropdown.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const CartDropdown =({cartItems})=>{
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length?
            (cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem}/>
            )))
            :(<h1>Empty cart</h1>)
            }
        </div>
    <Link to="/checkout">
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </Link>
    </div>
)}

const mapStateToProps=({cart:{cartItems}})=>(
    {
        cartItems
    }
)

export default withRouter(connect(mapStateToProps)(CartDropdown));