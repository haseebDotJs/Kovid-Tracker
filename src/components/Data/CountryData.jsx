import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup'
// bar
import VerticalBar from './VerticalBar'

// country list api
import { fetchCountries } from '../Api/Api'

// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'


export default function CountryData() {
    const { countryData, handleCountryChange, country } = useContext(DataContext)
    const { confirmed, recovered, deaths, lastUpdate } = countryData

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries())
        }
        getCountries()
    }, [])

    const useStyles = makeStyles((theme) => ({
        formControl: {
            marginBottom: theme.spacing(3),
            minWidth: "100%",
        }
    }));
    const classes = useStyles()
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select" color="secondary">Select Country</InputLabel>
                <Select native defaultValue="Pakistan" id="grouped-native-select" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option aria-label="None" value="">Select Country</option>
                    {
                        countries.map(country => {
                            return <option value={country} key={country}>{country}</option>
                        })
                    }
                </Select >
            </FormControl>
            {!country ? <div></div> :
                <Grid container item >
                    <Grid item md={12} xs={12}>
                        <Typography variant="subtitle1">Current Data of COVID-19 in {country}</Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <VerticalBar />
                    </Grid>
                </Grid>
            }
        </div >
    )
}
