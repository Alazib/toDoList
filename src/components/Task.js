import { useState } from "react"
import Button from "./Button/Button"
import "../styles/Task.css"

function Task({ taskDescription, tasksDone, setTasksDone }) {
  const [done, setDone] = useState(false)

  function doneOrPending() {
    if (done) {
      return "done"
    }
    return "pending"
  }

  function taskDone() {
    setDone(!done)
    tasksCheckedAndNotCheckedYet()
  }

  function tasksCheckedAndNotCheckedYet() {
    const TASK_IS_NOT_CHECKED_YET = !tasksDone.includes(taskDescription)

    if (TASK_IS_NOT_CHECKED_YET) {
      setTasksDone([...tasksDone, taskDescription])
    } else {
      let tasksDoneMinusOne = tasksDone.filter((task) => {
        return task !== taskDescription
      })
      setTasksDone([...tasksDoneMinusOne])
    }
  }
  console.log("taksDone:", tasksDone)

  return (
    <div className="button-and-task ">
      <Button
        label={"V"}
        className={"check"}
        onClick={() => {
          taskDone()
        }}
      ></Button>

      <li className={`task ${doneOrPending()}`}>{taskDescription}</li>
    </div>
  )
}

export default Task
