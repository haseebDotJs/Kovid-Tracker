import styles from './MainGrid.module.css'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// components
import GlobalData from './GlobalData'
import CountryData from './CountryData'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }

}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} >
                    <Typography variant="h2" style={{ textAlign: "center" }}>
                        Global Data
                    </Typography>
                    <GlobalData />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h2" style={{ textAlign: "center" }}>
                        Country Data
                    </Typography>
                    <CountryData />
                </Grid>
            </Grid>
        </div>
    );
}