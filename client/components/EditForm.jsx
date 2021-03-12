import React, { useState, useEffect } from 'react'
import ButtonSave from './ButtonSave'

const EditForm = ({ item, updateItem, isVisible, setVisibility, fetchTodos }) => {
  const style = {
    display: isVisible ? 'block' : 'none'
  }

  const [description, setDescription] = useState('')

  useEffect(() => setDescription(item.description), [item])

  const onSubmit = async e => {
    e.preventDefault()

    updateItem(item.id, description)

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
        Edit Item
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

export default EditForm

