import { useState } from "react"
import Button from "./Button/Button"
import "../styles/Task.css"

function Task({ taskPrinted, printedTasks, setPrintedTasks }) {
  const [done, setDone] = useState(false)

  function taskDone() {
    printedTasks.forEach((taskOnScreen) => {
      if (taskOnScreen.id === taskPrinted.id) {
        taskPrinted.isDone = !done
      }
    })
    setPrintedTasks([...printedTasks])
    setDone(!done)
  }

  function doneOrPending() {
    return taskPrinted.isDone === true ? "done" : "pending"
  }

  const { title } = taskPrinted

  return (
    <div className="button-and-task">
      <Button
        className={`${doneOrPending()}`}
        onClick={() => {
          taskDone()
        }}
      ></Button>

      <li className={`task task-${doneOrPending()}`}>{title}</li>
    </div>
  )
}

export default Task
