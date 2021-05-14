import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import CartDroppedDown from '../cartDroppedDown/cartDroppedDown'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {HeaderContainer,LogoContainer,OptionsLink,OptionsContainer  } from './header.styles.js';

import CartIcon from '../cart-icon/cart-icon.component';

import { createStructuredSelector  } from 'reselect';


import { selectCurrentUser } from '../../redux/user/user.slector';



const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer  to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionsLink to='/shop'>
        SHOP
      </OptionsLink>
      <OptionsLink  to='/shop'>
        CONTACT
      </OptionsLink>
      {currentUser ? (
        <OptionsLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionsLink>
      ) : (
        <OptionsLink className='option' to='/signin'>
          SIGN IN
        </OptionsLink>
        )}
        <CartIcon/>
    </OptionsContainer>
    <CartDroppedDown/>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

export default connect (mapStateToProps)(Header)


