import React from 'react';

import Badge from '@material-ui/core/Badge';
import { withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles(() =>
  createStyles({
    badge: {
      left: 9,
      border: `2px solid #ffc220`,
      backgroundColor: '#ffc220',
      color: 'black',
    },
  }),
)(Badge);

type CartButtonProps = {
  count: number,
  onClick: () => void,
};

const CartButton: React.FC<CartButtonProps> = ({count, onClick}) => (
  <IconButton aria-label="cart" onClick={onClick}>
    <StyledBadge badgeContent={count} color="secondary">
      <ShoppingCartIcon style={{ color: 'white' }} />
    </StyledBadge>
  </IconButton>
);

export default CartButton;