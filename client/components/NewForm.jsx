import React, { useState } from 'react'
import ButtonSave from './ButtonSave'

const NewForm = ({ createItem, isVisible, setVisibility, fetchTodos }) => {
  const style = {
    display: isVisible ? 'block' : 'none'
  }

  const [description, setDescription] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    createItem(description)

    setDescription('')

    setVisibility(false)

    await fetchTodos()
  }

  const onChangeDescription = e => {
    setDescription(e.target.value)
  }

  return <div style={style}>
    <form action="#" onSubmit={onSubmit}>
      <p>
        New Item
      </p>
      <div>
        <input type="text" value={description} onChange={onChangeDescription} placeholder="description" />
      </div>
      <div>
        <ButtonSave />
      </div>
    </form>
  </div>
}

export default NewForm

