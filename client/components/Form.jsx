import React, { useState } from 'react'
import { create } from '../api/todos'

const Form = ({ isVisible, setV, fetchTodos }) => {
  const style = {
    display: isVisible ? 'block' : 'none'
  }

  const [description, setDescription] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    create(description)

    setDescription('')

    setV(false)

    await fetchTodos()
  }

  const onChangeDescription = e => {
    setDescription(e.target.value)
  }

  return <div style={style}>
    <form action="#" onSubmit={onSubmit}>
      <div>
        <input type="text" value={description} onChange={onChangeDescription} placeholder="description" />
      </div>
      <div>
        <button type="submit">
          Create
        </button>
      </div>
    </form>
  </div>
}

export default Form

