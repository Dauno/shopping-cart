import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import useStyles from './useStyles';
import InputNumber from '../InputNumber';


type ProductProps = {
  id: number,
  brand: string,
  image: string,
  price: number,
  description: string,
  onAction: (produc: any, quantity: number) => void,
};

const Product: React.FC<ProductProps> = ({ onAction, ...product }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    onAction(product, quantity);
  }, [quantity]);

  
  const handleChange = (qty: number): void => setQuantity(qty);

  return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          title={product.description}
          image={`https://${product.image}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.brand}
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          {quantity === 0 ? (
            <Button 
              fullWidth
              size="small" 
              color="primary" 
              variant="contained"
              onClick={ () => handleChange(1)}
            >
              Agregar
            </Button>
          ) : (
            <InputNumber
              value={quantity} 
              onChange={handleChange} 
            />
          )}
        </CardActions>
      </Card>
  )
};

export default Product;