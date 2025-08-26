import { useState } from 'react'

export function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Apprendre React' },
    { id: 2, title: 'Créer une checklist' },
    { id: 3, title: 'Apprendre Vite' }
  ])

  const [task, setTask] = useState('') // <-- add this state for input

  const addTask = (e) => {
    e.preventDefault()
    if (task.trim() === '') return // avoid empty tasks

    setTasks([...tasks, { id: tasks.length + 1, title: task }]) 
    setTask('') // clear input
  }

  return (
    <section>
      <h2>Ma liste des trucs à faire</h2>
      <form onSubmit={addTask}>
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Nouvelle tâche"
        />
        <button type="submit">Ajouter la tâche</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </section>
  )
}
