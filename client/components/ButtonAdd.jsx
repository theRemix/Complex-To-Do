import React from 'react'
import Button from './Button'

const ButtonAdd = ({ setV }) =>
  <Button onClick={() => setV(true)} text='Add Item' />

export default ButtonAdd
