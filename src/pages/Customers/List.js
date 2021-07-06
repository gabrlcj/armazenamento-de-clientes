import { useState, useEffect } from "react"
import axios from 'axios'

import CustomerCard from '../../components/CustomerCard'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        background: '#ffff99',
        margin: theme.spacing(2),
    }
}))

const List = () => {
    const classes = useStyle()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then((response) => {
            const { data } = response.data
            setCustomers(data)
        })
    }, [])

    const removeCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {
            const newCustomers = customers.filter(customer => customer.id !== id)

            setCustomers(newCustomers)
        })
    }

    return (
        <Grid container>
            {
                customers.map(item => (
                    <Grid item xs={12} md={4}>
                        <CustomerCard
                            id={item.id} 
                            name={item.first_name + ' '}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            className={classes.card}
                            onRemoveCustomer={removeCustomer}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default List