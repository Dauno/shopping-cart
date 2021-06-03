import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
    root: {
        width: '400px',
    },
    listItem: {
        marginBottom: 10,
        backgroundColor: theme.palette.background.paper,
    }
}));
