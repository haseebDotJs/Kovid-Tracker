import styles from './Symptoms.module.css'
import fontWeight from '../components/FontWeight/FontWeight.module.css'
import symptom1 from '../images/symp1.jpg'
import symptom2 from '../images/symp2.jpg'
import symptom3 from '../images/symp3.jpg'
import symptom4 from '../images/symp4.jpg'
import symptom5 from '../images/symp5.jpg'
import symptom6 from '../images/symp6.jpg'
import cx from "classnames"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Symptoms = () => {
    const symptoms = [{
        img: symptom1,
        heading: "Coughing And Sneezing",
        title: "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
    },
    {
        img: symptom2,
        heading: "Hot Fever",
        title: "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
    },
    {
        img: symptom3,
        heading: "Hot Strong Headache",
        title: "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
    },
    {
        img: symptom4,
        heading: "Shortness Of Breath",
        title: "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
    },
    {
        img: symptom5,
        heading: "Confusion",
        title: "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
    },
    {
        img: symptom6,
        heading: "Sore Throat",
        title: "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
    }]

    return (
        <Box py={8} id="Symptoms" className={styles.container}>
            <Container maxWidth="lg">
                <Box mb={5}>
                    <Box mb={2}>
                        <Typography variant="h4" className={cx(fontWeight.bold, styles.heading)} align="center">
                            Corona Virus Symptoms
                        </Typography>
                    </Box>
                    <Box maxWidth="70%" mx="auto">
                        <Typography variant="subtitle1" className={styles.title} align="center">
                            Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={5}>
                    {
                        symptoms.map(symptom => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={symptom.heading}>
                                    <Box py={3} mb={1} className={styles.symptomBox}>
                                        <Box mb={2} className={styles.image_cropper}>
                                            <img className={styles.image} src={symptom.img} alt="covid symptom" />
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="h5" className={cx(fontWeight.bold, styles.heading)}>{symptom.heading}</Typography>
                                        </Box>
                                        <Box maxWidth="70%" mx="auto">
                                            <Typography variant="subtitle1" className={cx(fontWeight.regular, styles.title)}>{symptom.title}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Container>
        </Box>
    )
}

export default Symptoms
