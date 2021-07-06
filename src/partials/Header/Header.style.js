import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 0,
    },

    list: {
        background: '#e0fbfc',
        flexGrow: 1,
    },

    icon: {
        color: '#121212',
    }
}))

export default useStyles