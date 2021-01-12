import React from 'react'
// import styles from './MenuItems.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Link from '@material-ui/core/Link';


const MenuItems = () => {

    const useStyles = makeStyles(() => ({
        title: {
            marginRight: '16px',
        }
    }))
    const classes = useStyles()
    const items = [
        {
            href: "#Statistics",
            item: "Statistics",
        },
        {
            href: "#Symptoms",
            item: "Symptoms",
        },
        {
            href: "#Best-Doctors",
            item: "Best Doctors",
        },
        {
            href: "#FAQ",
            item: "FAQ",
        }
    ]
    return (
        <>
            {
                items.map(menu => (
                    <Typography variant="subtitle2" className={classes.title} key={menu.item}>
                        <Link
                            style={{
                                textDecoration: 'none'
                            }}
                            href={menu.href}
                            className={classes.anchor}
                        >
                            <Button
                                style={{
                                    color: 'rgb(57,75,108)',
                                    outline: 'none'
                                }}
                            >
                                {menu.item}
                            </Button>
                        </Link>
                    </Typography>
                ))

            }
        </>
    )
}

export default MenuItems
