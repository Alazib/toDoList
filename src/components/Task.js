import { useState } from "react"
import Button from "./Button/Button"
import "../styles/Task.css"

function Task({ taskDescription }) {
  const [done, setDone] = useState(false)

  function doneOrPending() {
    if (done) {
      return "done"
    }
    return "pending"
  }

  function taskDone() {
    setDone(!done)
  }

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
