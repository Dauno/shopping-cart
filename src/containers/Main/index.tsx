import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import useStyles from './useStyles';

type MainContainerProps = {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
};

const MainContainer: React.FC<MainContainerProps> = ({children}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid
                container
                justify='center'
                className={ classes.container }
            >
                <Grid item xs={12} sm={11}>
                    <Grid container>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default MainContainer;
