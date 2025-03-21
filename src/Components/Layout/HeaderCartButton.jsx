import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-Context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsBump, setBtnIsBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnclasses = `${classes.button} ${btnIsBump ? classes.bump : ''}`;
  
  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsBump(true);

    const timer = setTimeout(() => {
      setBtnIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  }, [items]);

  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;