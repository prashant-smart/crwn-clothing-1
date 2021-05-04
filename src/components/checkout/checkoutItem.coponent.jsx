import React from 'react';

import './checkoutItem.styles.scss';

import { clearItemFromCart,addItem,removeItemFromCart } from '../../redux/cart/cart.action';

import  { connect }  from 'react-redux';



const CheckoutItem=({cartItem,claerItem,addItem,removeItem})=>{
    
    const {imageUrl,name,quantity,price}=cartItem; //we do this because by this we get the access  of cart item 
    return(

    <div className='checkout-item '>
        <div className='image-container '>
            <img src={imageUrl} alt=""/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow'  onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>claerItem(cartItem)}>&#10005;</div>
    </div>
 
)}
const mapDispatchToProps=dispatch=>({
    claerItem:item=>dispatch(clearItemFromCart(item)),
    addItem:item=>dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);