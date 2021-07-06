import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
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
                    <Typography variant="h6" className={classes.title}>
                        Aplicação
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => toggleMenu()}>
                <List>
                    <ListItem button onClick={() => handleMenuClick('/')}>
                        <ListItemIcon>
                            <HomeRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <ContactsRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText>Lista de Clientes</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleMenuClick('/customers/add')}>
                        <ListItemIcon>
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