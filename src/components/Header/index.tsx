import React, { useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from './logo.svg';
import useStyles from './useStyles';
import CartButton from '../CartButton';
import CartContext from '../../context/Cart/context';

const Header: React.FC = () => {
  const classes = useStyles();
  const { productsCount, open } = useContext(CartContext);

  return (
    <AppBar>
      <Toolbar>
        <img src={logo} alt={'logo'} className={classes.logo} />
        <Typography variant="h6" align="center" className={classes.title}>
          Full stack test
        </Typography>
        <CartButton count={productsCount} onClick={() => open(true)} />
      </Toolbar>
    </AppBar>
  )
};


export default Header;