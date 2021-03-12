import React from 'react'
import Button from './Button'

const ButtonEdit = ({ id, editItem }) =>
  <Button onClick={() => editItem(id)} text='edit' />

export default ButtonEdit
