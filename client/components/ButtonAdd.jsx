import React from 'react'
import Button from './Button'

export default ({ setV }) =>
  <Button onClick={() => setV(true)} text='Add Item' />

