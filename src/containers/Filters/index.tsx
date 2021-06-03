import React from 'react';

import Grid from '@material-ui/core/Grid';

import useStyles from './useStyles';


type FiltersContainerProps = {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
};

const FiltersContainer: React.FC<FiltersContainerProps> = ({children}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={3} className={ classes.container }>
            <Grid 
                container 
                justify='center'
                direction='column'
                alignItems='center'
                spacing={3}
            >
                {children}
            </Grid>
        </Grid>
    )
};

export default FiltersContainer;
