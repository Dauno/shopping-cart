import React from 'react';

import Grid from '@material-ui/core/Grid';

import Filter from  '../Filter';
import FiltersContainer from '../../containers/Filters';

const dummydata = [
    { key: 'brand' },
];

const Filters: React.FC = () => {

    const renderFilters = (data: any) => data.map((filter: any) => (
        <Grid item xs={11} key={filter.key}>
            <Filter {...filter} />
        </Grid>
    ));

    return (
        <FiltersContainer>
            {renderFilters(dummydata)}
        </FiltersContainer>
    );
}

export default Filters;
