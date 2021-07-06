import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Header from '../partials/Header/Header'

const useStyles = makeStyles(() => ({
    container: {
        padding: '22px 0',
        color: '#121212',
        textAlign: 'center',
        border: '10px ridge #293241',
        height: '65vh',
    },
}))

const Default = ({ children }) => {
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default