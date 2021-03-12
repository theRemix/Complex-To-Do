import React from 'react'
import Button from './Button'

const ButtonRemove = ({ id, removeItem }) =>
  <Button onClick={() => removeItem(id)} text='&times;' />

export default ButtonRemove
