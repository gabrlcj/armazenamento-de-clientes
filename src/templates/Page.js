import Typography from '@material-ui/core/Typography'


const Page = ({ title, Component }) => {
    return (
        <>
            <Typography variant="h2">
                {title}
            </Typography>
            <Component />
        </>
    )
}

export default Page