import { useState } from "react"
import "../styles/List.css"
import Button from "./Button/Button"
import Task from "./Task"

function List({ tasksList, setPrintedTasks }) {
  const [tasksDone, setTasksDone] = useState([])

  function deleteTasksDone() {
    let tasksUndone = []
    for (let i = 0; i < tasksList.length; i++) {
      const TASK_IS_NOT_DONE = !tasksDone.includes(tasksList[i])
      if (TASK_IS_NOT_DONE) {
        tasksUndone.push(tasksList[i])
      }
    }
    setPrintedTasks(tasksUndone)
    console.log("TASKS UNDONE", tasksUndone)
  }

  return (
    <>
      <ul className="to-do-list">
        {tasksList.map((task, position) => {
          return (
            <Task
              key={position}
              taskDescription={task}
              tasksDone={tasksDone}
              setTasksDone={setTasksDone}
            ></Task>
          )
        })}
      </ul>
      <Button
        label={"X"}
        className={"delete"}
        onClick={() => {
          deleteTasksDone()
        }}
      />
    </>
  )
}

export default List
