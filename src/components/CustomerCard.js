import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton
} from '@material-ui/core'

import EditRoundedIcon from '@material-ui/icons/EditRounded'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import ModalConfirm from './ModalConfirm'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}))

const CustomerCard = ({ id, name, lastname, email, avatar, className, onRemoveCustomer }) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const toggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const confirmModal = id => {
    onRemoveCustomer(id)
    toggleOpenModal()
  }

  const removeCustomer = () => {
      toggleOpenModal()
  }

  return (
      <>
        <Card className={classNames(className, classes.root)}>
            <CardHeader
                avatar={<Avatar src={avatar}></Avatar>}
                title={`${name}${lastname}`}
                subheader={email}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="Editar card">
                    <EditRoundedIcon />
                </IconButton>
                <IconButton aria-label="Deletar card" onClick={removeCustomer}>
                    <DeleteForeverRoundedIcon />
                </IconButton>
            </CardActions>
        </Card>
      <ModalConfirm 
      open={openModal}
      onClose={toggleOpenModal}
      onConfirm={() => confirmModal(id)}
      title="Deseja excluir este cadastro?"
      message="Ao confirmar não será possível reverter esta operação"
      />
    </>
  )
}

export default CustomerCard