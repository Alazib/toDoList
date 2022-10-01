import { useState } from "react"
import List from "./components/List"
import uniqid from "uniqid"
import "./styles/App.css"
import Button from "./components/Button/Button"

function App() {
  const [newTask, setNewTask] = useState({})
  const [printedTasks, setPrintedTasks] = useState([])
  const [formValue, setFormValue] = useState("")

  function handleOnChange(e) {
    setNewTask({ title: e.target.value, id: uniqid(), isDone: false })
    setFormValue(e.target.value)
  }

  function handleOnSubmit(event) {
    event.preventDefault()

    const NEW_TASK_EXISTS =
      newTask.hasOwnProperty("title") && newTask.title !== ""

    if (NEW_TASK_EXISTS) {
      setPrintedTasks([...printedTasks, newTask])
    }
    setFormValue("")
    setNewTask({})
  }

  const SOME_PRINTED_TASK_EXISTS = printedTasks.length > 0

  return (
    <>
      <div className="App">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            onChange={(e) => handleOnChange(e)}
            value={formValue}
          ></input>
          <Button
            type="submit"
            label={"Añadir"}
            onClick={null}
            className={"submit"}
          ></Button>
        </form>
        {SOME_PRINTED_TASK_EXISTS && (
          <List printedTasks={printedTasks} setPrintedTasks={setPrintedTasks} />
        )}
      </div>
    </>
  )
}

export default App
