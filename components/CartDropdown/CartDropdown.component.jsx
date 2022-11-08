import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart.context';

import Button from '../Button/Button.component';

import CartItem from '../CartItem/CartItem.component';

import './CartDropdown.styles.scss';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropDown;
