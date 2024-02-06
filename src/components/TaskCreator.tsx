import styles  from "./TaskCreator.module.css";
import {  PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

export interface TaskProps {
   onCreateTask: (task: string ) => void
 }

export const TaskCreator = ({onCreateTask}: TaskProps) => {
   const [newTask, setNewTask] = useState('')

   const handelCreateTask = (event: FormEvent) => {
      event.preventDefault()
      onCreateTask(newTask)
      setNewTask('')
   }
   const handleNewTaskInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
      event.target.setCustomValidity('Esse campo é obrigatório!')
   }

  const handleNewTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
   event.target.setCustomValidity('')
   setNewTask(event.target.value)
}

   const isnNewTaskEmpty = newTask.length === 0

   return (
        <div className={styles.taskCreatorContainer}>
         <form className={styles.taskCreator} onSubmit={handelCreateTask} >
            <textarea
                  name='taskInput'
                  placeholder='Adicione uma nova tarefa'
                  value={newTask}
                  onChange={handleNewTaskChange}
                  onInvalid={handleNewTaskInvalid}
                  required
            />
            <button type="submit" disabled={isnNewTaskEmpty}>
                  Criar<PlusCircle/>
            </button>

         </form>

        </div>
   )
}