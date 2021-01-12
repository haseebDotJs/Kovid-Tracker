import styles from './DoctorCard.module.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import fontWeight from '../../components/FontWeight/FontWeight.module.css'

// images
import Doctor1 from '../../images/Doc1.jpg'
import Doctor2 from '../../images/Doc2.jpg'
import Doctor3 from '../../images/Doc3.jpg'

// icon
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';


const DoctorCard = () => {
    const DoctorsInfo = [{
        name: "Dorothy M. Nickell",
        specialist: "Throat Specialist",
        description: "Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin Was Procedur",
        number: "+880 1234 567 890",
        email: "d.m.nickell@gmail.com",
        image: Doctor1
    },
    {
        name: "Billie R. Courtney",
        specialist: "Cardiologist",
        description: "Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin Was Procedur",
        number: "+880 1234 567 890",
        email: "b.r.courtney@gmail.com",
        image: Doctor2
    },
    {
        name: "Courtney A. Smith",
        specialist: "Rehabilitation Therapy",
        description: "Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin Was Procedur",
        number: "+880 1234 567 890",
        email: "c.a.smith@gmail.com",
        image: Doctor3
    }
    ]
    return (
        <Grid container spacing={4}>
            {DoctorsInfo.map(Doctor => {
                return (
                    <Grid item xs={12} md={4} key={Doctor.email}>
                        <Card className={styles.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Best Doctors"
                                    image={Doctor.image}
                                    title="Best Doctors"
                                />
                                <CardContent>
                                    <Box px={2}>
                                        <Typography gutterBottom variant="h5" component="h2" className={fontWeight.bold}>
                                            {Doctor.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p" className={fontWeight.regular}>
                                            {Doctor.specialist}
                                        </Typography>
                                        <Divider />
                                        <Box mt={1}>
                                            <Typography variant="body2" component="p" className={fontWeight.regular}>
                                                {Doctor.description}
                                            </Typography>
                                        </Box>
                                        <Box mt={3}>
                                            <Box className={styles.phoneLi}>
                                                <Typography className={styles.phone} variant="body1">
                                                    <CallIcon style={{ color: 'rgb(194,194,194)' }} />
                                                </Typography>
                                                <Typography className={styles.phoneText} variant="body2">
                                                    {Doctor.number}
                                                </Typography>
                                            </Box>
                                            <Box className={styles.emailLi}>
                                                <Typography className={styles.email} variant="body1">
                                                    <EmailIcon style={{ color: 'rgb(194,194,194)' }} />                                        </Typography>
                                                <Typography className={styles.emailText} variant="body2">
                                                    {Doctor.email}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );
}
export default DoctorCard