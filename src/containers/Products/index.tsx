import React from 'react';

import Grid from '@material-ui/core/Grid';

import useStyles from './useStyles';

type ProductsContainerProps = {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({children}) =>{
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={9} className={ classes.container }>
            <Grid 
                container 
                spacing={2}
            >
                {children}
            </Grid>
        </Grid>
    )
};

export default ProductsContainer;
