import React, { useState, useEffect } from 'react'
import ButtonAdd from './ButtonAdd'
import NewForm from './NewForm'
import EditForm from './EditForm'
import TaskList from './TaskList'
import Title from './Title'
import { list, create, read, destroy, update } from '../api/todos'

const App = () => {
  const [showNewForm, setShowNewForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [editingItem, setEditingItem] = useState({})
  const [tasks, setTasks] = useState([])

  const fetchTodos = async () => {
    setTasks(await list())
  }

  const removeItem = async (id) => {
    await destroy(id)
    await fetchTodos()
  }

  const createItem = async (description) => {
    await create(description)
  }

  const editItem = async (id) => {
    const item = await read(id)
    setEditingItem(item)
    setShowEditForm(true)
  }

  const updateItem = async (id, description) => {
    await update(id, description)
    await fetchTodos()
  }

  useEffect(fetchTodos, [])

  return <div>
    <Title text="Complex To Do" />
    <ButtonAdd setV={setShowNewForm} />
    <NewForm isVisible={showNewForm} setVisibility={setShowNewForm} createItem={createItem} fetchTodos={fetchTodos}/>
    <EditForm isVisible={showEditForm} item={editingItem} updateItem={updateItem} setVisibility={setShowEditForm} fetchTodos={fetchTodos}/>
    <TaskList tasks={tasks} editItem={editItem} removeItem={removeItem} />
  </div>
}

export default App
