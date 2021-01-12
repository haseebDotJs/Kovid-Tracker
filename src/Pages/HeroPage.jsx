import styles from './HeroPage.module.css'
import fontWeight from '../components/FontWeight/FontWeight.module.css'
import HeroImage from '../images/heroImage.png'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CountUp from 'react-countup'

// context
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const HeroPage = () => {
    const { globalData: { confirmed } } = useContext(DataContext)


    return(
        <Box id="hero" className={styles.container}>
            <Container maxWidth="lg">
                <Typography className={fontWeight.bold} variant='h2' gutterBottom>
                    KOVID-19 TRACKER
                </Typography>
                <Typography className={fontWeight.medium} variant='h4'>
                    TOTAL CONFIRMED KORONA CASES
                </Typography>
                <Typography className={fontWeight.bold} variant='h2' style={{ color: 'rgb(75,102,145)' }} gutterBottom>
                    {confirmed && <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={2}
                        separator=','
                    />
                    }
                </Typography>

                <img className={styles.image} src={HeroImage} alt="COVID-19" />
            </Container>
        </Box>
    )
}

export default HeroPage
