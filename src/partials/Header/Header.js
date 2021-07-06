import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded'
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded'

import useStyles from './Header.style'

const Header = () => {
    const classes = useStyles()
    const history = useHistory()

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        toggleMenu()
        history.push(route)
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleMenu()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => toggleMenu()}>
                <List className={classes.list}>
                    <ListItem button onClick={() => handleMenuClick('/customers')}>
                        <ListItemIcon className={classes.icon}>
                            <ContactsRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText>Lista de Clientes</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleMenuClick('/customers/add')}>
                        <ListItemIcon className={classes.icon}>
                            <PersonAddRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText>Cadastrar Cliente</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Header