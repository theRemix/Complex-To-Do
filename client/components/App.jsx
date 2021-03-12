import React, { useState, useEffect } from 'react'
import ButtonAdd from './ButtonAdd'
import Form from './Form'
import TaskList from './TaskList'
import Title from './Title'
import { list, destroy } from '../api/todos'

const App = () => {
  const [v, setV] = useState(false)
  const [tasks, setTasks] = useState([])

  const fetchTodos = async () => {
    setTasks(await list())
  }

  const removeItem = id => async () => {
    await destroy(id)
    await fetchTodos()
  }

  useEffect(fetchTodos, [])

  return <div>
    <Title text="Complex To Do" />
    <ButtonAdd setV={setV} />
    <Form isVisible={v} setV={setV} fetchTodos={fetchTodos}/>
    <TaskList tasks={tasks} removeItem={removeItem} />
  </div>
}

export default App
