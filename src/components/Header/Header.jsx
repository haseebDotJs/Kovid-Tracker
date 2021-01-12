import React from "react"
import styles from './Header.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../images/logo-dark.png'
import Container from '@material-ui/core/Container'
import MenuItem from './MenuItems'

// context
import { useContext } from 'react'
import ScreenContext from '../../context/ScreenContext'

// mobile version navbar
import ResponsiveDrawer from './ResponsiveDrawer'

const useStyles = makeStyles((theme) => ({
    logo: {
        marginRight: theme.spacing(4),
    }
}))

export default function Header() {
    const classes = useStyles();
    const { mobile } = useContext(ScreenContext)


    return (
        <div className={styles.container} >
            {mobile ? <ResponsiveDrawer /> :
                <AppBar style={{ backgroundColor: "white" }}>
                    <Container maxWidth='lg'>
                        <Toolbar>
                            <img src={Logo} alt="logo" className={classes.logo} />
                            <MenuItem />
                        </Toolbar>
                    </Container>
                </AppBar>
            }
        </div >
    );
}