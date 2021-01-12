import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import CountUp from 'react-countup'

// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: "100%",
      height: theme.spacing(16),
      textAlign: 'center'
    },
  },
}));


export default function GlobalData() {
  const { globalData: { confirmed, recovered, deaths, lastUpdate } } = useContext(DataContext)
  const classes = useStyles();


  return (
    !confirmed ? <div>Loading....</div> :
      <div className={classes.root}>

        <Paper elevation={3} style={{ backgroundColor: "rgb(38, 50, 56)" }}>
          <Typography variant="h6" color="primary">
            Total Cases
        </Typography>

          <Typography variant="subtitle1" color="secondary">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2}
              separator=","
            />
          </Typography>
        </Paper>

        <Paper elevation={3} style={{ backgroundColor: "rgb(38, 50, 56)" }}>
          <Typography variant="h6" color="primary">
            Active
        </Typography>

          <Typography variant="subtitle1" color="secondary">
            <CountUp
              start={0}
              end={confirmed.value - recovered.value - deaths.value}
              duration={2}
              separator=","
            />
          </Typography>
        </Paper>

        <Paper elevation={3} style={{ backgroundColor: "rgb(38, 50, 56)" }}>
          <Typography variant="h6" color="primary">
            Recovered
        </Typography>
          <Typography variant="subtitle1" color="secondary">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator=","
            />
          </Typography>
        </Paper>

        <Paper elevation={3} style={{ backgroundColor: "rgb(38, 50, 56)" }}>
          <Typography variant="h6" color="primary">
            Deaths
        </Typography>
          <Typography variant="subtitle1" color="secondary">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2}
              separator=","
            />
          </Typography>
        </Paper>
      </div>
  );
}