import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
const CartIcon = ({ toggleCartHidden,countItems }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'  />
      <span className='item-count'>{countItems}</span>
    </div>
  );

const mapDispatchToProps = dispatch => ( {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

  const mapStateToProps=createStructuredSelector({
    countItems:selectCartItemsCount
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);
