import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.css'
import { connect } from 'react-redux';
const CartDropdown =({cartItems})=>{
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)}

const mapStateToProps=({cart:{cartItems}})=>(
    {
        cartItems
    }
)
export default connect(mapStateToProps)(CartDropdown);