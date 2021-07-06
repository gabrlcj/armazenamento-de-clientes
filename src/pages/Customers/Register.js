import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'

import { TextField, Button } from '@material-ui/core'

import Toasty from '../../components/Toasty'


const useStyle = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    },
}))

const Register = () => {
    const classes = useStyle()

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const inputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const registerButton = () => {
        let hasError = false

        let newFormState = {
            ...form,
        }
        if(!form.name.value) {
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o campo corretamente'
            }
        }

        if(!form.job.value) {
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite o campo corretamente'
            }
        }

        if(hasError) {
            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then(() => {
            setOpenToasty(true)
        })
    }

    const [openToasty, setOpenToasty] = useState(false)

    return (
        <>
            <div className={classes.wrapper}>
                <TextField 
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    label="Digite o seu nome" 
                    name='name' value={form.name.value} 
                    variant="outlined" 
                    onChange={inputChange}/>
            </div>
            <div className={classes.wrapper}>
                <TextField 
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    label="Digite o seu emprego" 
                    name='job' value={form.job.value} 
                    variant="outlined" 
                    onChange={inputChange}/>
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="secondary" onClick={registerButton}>
                    Cadastrar
                </Button>
            </div>
            <Toasty 
                open={openToasty} 
                severity="success" 
                text="Cadastro realizado com sucesso"
                onClose={() => setOpenToasty(false)}
                />
        </>
    )
}

export default Register