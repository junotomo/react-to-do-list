import { Check, Trash } from "phosphor-react"
import styles from "./Task.module.css"
import { Task } from "../App"


interface TaskProps {
    taskValue: Task,
    onTaskToggleStatus: ({id, isChecked}: {id: number, isChecked: boolean}) => void
    onDeleteTask: (id: number) => void
}

export const TaskContainer = ({taskValue,onTaskToggleStatus, onDeleteTask}: TaskProps) => {

    const handleDeleteTask = () => {
        onDeleteTask(taskValue.id)
    }
    const handleTaskToggle = () => {

        onTaskToggleStatus({id: taskValue.id, isChecked: !taskValue.isChecked})

    }



  const checkedStyle = taskValue.isChecked? styles['checked-paragpraph']: ''

    return (
        <article className={styles.articleList}>
            <div className={styles.task}>
                <label className={styles.taskCheck} onClick={handleTaskToggle}>
                    <input type="checkbox" />
                    <span><Check/></span>
                </label>
                <p className={`${checkedStyle}`}>
                    {taskValue.text}
                </p>
                <button onClick={handleDeleteTask}>
                    <Trash  size={14}/>
                </button>
            </div>
        </article>
    )
}