import { Check, Trash } from "phosphor-react"
import styles from "./Task.module.css"
import { Task } from "../App"
import { ChangeEvent } from 'react'

interface TaskProps {
    taskValue: Task,
    onTaskToggleStatus: ({id, isChecked}: {id: number, isChecked: boolean}) => void
    onDeleteTask: (id: number) => void
}

export const TaskContainer = ({taskValue,onTaskToggleStatus, onDeleteTask}: TaskProps) => {

    const handleDeleteTask = () => {
        onDeleteTask(taskValue.id)
    }
    
    const handleTaskToggle = (event: ChangeEvent<HTMLLabelElement>)=> {
        event.preventDefault()
        onTaskToggleStatus({id: taskValue.id, isChecked: !taskValue.isChecked})
    }

    const checkboxStyle = taskValue.isChecked ? styles['checkbox-checked']: styles['checkbox-unchecked']
    const checkedStyle = taskValue.isChecked ? styles['checkedText']: ''

    return (
        <div className={styles.task}>
            <label className={`${styles.taskCheck} ${checkboxStyle}`} onClick={ event =>handleTaskToggle(event)}>
                <input type="checkbox" />
                <span>
                    {taskValue.isChecked && <Check size={12} />}
                </span>
            </label>
            <p className={`${styles.taskText} ${checkedStyle}`}>
                {taskValue.text}
            </p>
            <button onClick={handleDeleteTask}>
                <Trash  size={14}/>
            </button>
        </div>
    )
}