import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>({
    root: {
        minHeight: 393,
        padding: theme.spacing(3),
    },
    media: {
        width: 150,
        height: 150,
        margin:'0 auto',
        backgroundSize: 'contain',
    },
}));
