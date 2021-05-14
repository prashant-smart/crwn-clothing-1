import React from 'react';
import './cartDroppedDown.styles.scss';
import CusttomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item-component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems,isHidden,history,dispatch}) => {
    if(!isHidden)
        return(
                <div className='cart-dropdown'>
                <div className='cart-items'>
                    {cartItems.length?
                    cartItems.map(cartItem => (
                      <CartItem key={cartItem.id} item={cartItem} />
                      )):
                      <span className='empty-message'>Your Cart Is Empty</span>}
                </div>
                <CusttomButton onClick={()=>{
                  history.push('/checkout');
                  dispatch(toggleCartHidden())}
              
              } >GO TO CHECKOUT</CusttomButton>
                </div>
            )
    else
        return null;
    
}
  
  const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems,
    isHidden:selectCartHidden
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));
  // this withrouter thing how work go and checkout that why tihs is put here,the thing i kow that by this out function has abhility to get history argument