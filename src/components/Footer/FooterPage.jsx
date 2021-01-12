import React from "react";
import styles from './FooterPage.module.css'
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import fontWeight from '../FontWeight/FontWeight.module.css'
import cx from "classnames"

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const FooterPage = () => {

  const moreInfo = [
    {
      href: "https://www.worldometers.info/coronavirus/#news",
      info: "News"
    },
    {
      href: "https://www.worldometers.info/coronavirus/transmission/",
      info: "Transmission"
    },
    {
      href: "https://www.worldometers.info/coronavirus/coronavirus-incubation-period/",
      info: "Incubation"
    },
    {
      href: "https://www.worldometers.info/coronavirus/coronavirus-death-rate/",
      info: "Death Rate"
    }
  ]
  const socialContact = [
    {
      icon: <FacebookIcon />,
      platform: 'Facebook'
    },
    {
      icon: <InstagramIcon />,
      platform: 'Instagram'
    },
    {
      icon: <TwitterIcon />,
      platform: 'Twitter'
    },
    {
      icon: <YouTubeIcon />,
      platform: 'Youtube'
    },
    {
      icon: <LinkedInIcon />,
      platform: 'LinkedIn'
    }
  ]
  return (
    <Box className={styles.container}>
      <Container maxWidth="lg" >
        <Box py={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box mb={2}>
                <Typography variant="h6" className={cx(styles.color, fontWeight.bold)} gutterBottom>
                  About Kovid-19
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(styles.text, fontWeight.light)}>
                  Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>

              <Typography variant="h6" className={cx(styles.color, fontWeight.bold)} gutterBottom>More Information</Typography>
              {
                moreInfo.map(info => (
                  <Box mb={2} key={info.info}>
                    <Typography variant="subtitle1" className={fontWeight.light} >
                      <a className={styles.anchor} component="p" href={info.href}>{info.info}</a>
                    </Typography>
                  </Box>
                ))
              }
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" className={cx(styles.color, fontWeight.bold)} gutterBottom>Social Contact</Typography>
              {
                socialContact.map(social => (
                  <Box mb={2} style={{ display: "flex", alignItems: "center" }} key={social.platform}>
                    <Typography variant="subtitle1" className={cx(fontWeight.light, styles.color)}>
                      {social.icon}
                    </Typography>
                    <Typography variant="subtitle1" className={cx(fontWeight.light, styles.color)} style={{ marginLeft: '8px' }}>
                      <a className={styles.anchor} component="p" href="#hero">{social.platform}</a>
                    </Typography>
                  </Box>
                ))
              }
            </Grid>
            <Grid item xs={12} md={3}>
              <Box mb={2}>
                <Typography variant="h6" className={cx(styles.color, fontWeight.bold)} gutterBottom>
                  Address:
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(styles.color, fontWeight.light)}>
                  795 Folsom Ave, Suite 600 San Francisco, CA 94107
                </Typography>
              </Box>
              <Box style={{ display: 'flex', alignItems: "baseline" }} mb={2}>
                <Typography variant="h6" className={cx(styles.color, fontWeight.bold)} gutterBottom>
                  Phone:
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(styles.color, fontWeight.light)} style={{ marginLeft: '8px' }}>
                  (91) 8547 632521
                </Typography>
              </Box>
              <Box style={{ display: 'flex', alignItems: "baseline" }} mb={2}>
                <Typography variant="h6" className={cx(styles.color, fontWeight.bold)} gutterBottom>
                  Email:
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(styles.color, fontWeight.light)} style={{ marginLeft: '8px' }}>
                  info@covid-19.com
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container >

      <Box py={3} className={styles.ending}>
        <Typography variant="subtitle2" style={{ color: "white" }}>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/haseebDotJs" style={{ fontWeight: "bold", color: "white" }}> Abdul Haseeb </a></Typography>
      </Box>
    </Box >
  );
}

export default FooterPage;