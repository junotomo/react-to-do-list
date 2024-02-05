import { TaskCreator } from './components/TaskCreator.tsx'
import { Header } from "./components/Header.tsx"
import { TaskContainer } from "./components/Task.tsx";
import './global.css'
import { useState } from 'react';

export interface Task {
  id: number
  text: string
  isChecked: boolean
}

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([])

  const createTask = (newTaskText: string) => {
    const task = {
      id: Math.random(),
      text: newTaskText,
      isChecked: false
    }    

    setTaskList([...taskList, task])
  }

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter( task => {
         return task.id !== id
    })
    setTaskList(newTaskList)
  }

  const toggleTask = ({ id, isChecked }: { id: number; isChecked: boolean }) => {
    const updatedTasks = taskList.map(task => {
      if (task.id === id) {
        return { ...task, isChecked: isChecked }
      }
      return { ...task }
    })
    setTaskList(updatedTasks)
  }


  return (
    <div >
        <Header />
        <TaskCreator
          onCreateTask={createTask}
         />
      <main>    
        {taskList.map(taskContent => {
            return (
              <TaskContainer
                  key={taskContent.id}
                  taskValue={taskContent}
                  onDeleteTask={deleteTask}
                  onTaskToggleStatus={toggleTask}
              />
            )
        })}       
      </main>
    </div>

    )
}

