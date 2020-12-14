import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles'
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        // we can also use <OptionLink as='div' /> instead of css block in styled components
        <OptionDiv className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink className="option" to="/signIn">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
