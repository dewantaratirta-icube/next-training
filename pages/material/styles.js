import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& h5': {
            fontSize: '72px'
        },
        '& button': {
            transition: 'color .8s, background-color .8s'
        }
    },
    card: {
        padding: '10px',
        marginTop: '40px',
        height: '20vmin',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        '& h4': {
            display: 'inline-block'
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'white ',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundColor: 'red',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'blue'
        },
        [theme.breakpoints.up('xl')]: {
            backgroundColor: 'green'
        },
    },
    button: {
        marginTop: '20px'
    }
}));

export default useStyles