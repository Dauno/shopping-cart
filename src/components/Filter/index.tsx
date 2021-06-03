import React from 'react';

import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import useStyles from './useStyles';

const Filter: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
        <Accordion >
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
          >
          <Typography className={classes.heading}>Filtro</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Alert className={classes.alert} severity="warning">En construcción</Alert>
          </AccordionDetails>
        </Accordion>
    </Paper>
  );
};

export default Filter;