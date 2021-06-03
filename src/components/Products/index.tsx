import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Product from  '../Product';
import CartContext from '../../context/Cart/context';
import ProductsContainer from '../../containers/Products';
import { useGetRequest, Product as ProductDoc } from '../../api';


const Products: React.FC = () => {
    const { add, remove } = useContext(CartContext);
    const { data, isLoading, error } = useGetRequest<Array<ProductDoc>>('product');

    const handleAction = (produc: any, quantity: number = 0) => {
        if (quantity !== 0) {
            add(produc, quantity);
        } else {
            remove(produc);
        }
    };

    const renderProducts = (data: any) => data.map((product: any) => (
        <Grid item xs={12} sm={4} key={`${product.brand}-${product.id}`}>
            <Product {...product} onAction={handleAction}  />
        </Grid>
    ));

    const errorMessage = (
        <Grid
            container 
            justify='center'
            direction='column'
            alignItems='center' 
        >
            <Grid item xs={6} >
                <Grid item xs={12} >
                    <Typography align="center" variant="h5" gutterBottom>
                        Error
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        No pudimos cargar los productos, intentalo más tarde :)
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <ProductsContainer>
            <Backdrop open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {data ? renderProducts(data) : null}
            {error ? errorMessage : null}
        </ProductsContainer>
    );
};


export default Products;