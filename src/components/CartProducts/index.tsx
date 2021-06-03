import React, { useContext } from 'react';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import useStyles from './useStyles';
import CartContext from '../../context/Cart/context';

const CartProducts: React.FC = () => {
    const classes = useStyles();
    const { products } = useContext(CartContext);

    const renderProducts = (data: any) => data.map((product: any) => (
        <ListItem key={`cart-${product.id}${product.brand}`}>
            <ListItemAvatar>
                <Avatar
                    variant="square"
                    alt={product.description}
                    src={`https://${product.image}`}
                />
            </ListItemAvatar>
            <ListItemText 
                primary={(
                    <>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {product.brand}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                    </>
                )} 
                secondary={(
                    <Typography variant="body2" color="textSecondary" component="p">
                        cantidad: {product.quantity}
                    </Typography>
                )}
            />
            <ListItemSecondaryAction>
                <Typography variant="body2" color="textSecondary" component="p">
                    ${product.total}
                </Typography>
            </ListItemSecondaryAction>
        </ListItem>
    ));

    return (
        <Grid item xs={12}>
            <Card className={classes.listItem}>
                <CardContent>
                    {products.length ? (
                        <List dense className={classes.root}>
                            {renderProducts(products)}
                        </List>
                    ) : null }
                    {products.length === 0 ? (
                            <Typography variant="h6" align="center" gutterBottom>
                                Tu carro está vacío 
                            </Typography>
                    ) : null }
                </CardContent>
            </Card>
        </Grid>
    )
};


export default CartProducts;