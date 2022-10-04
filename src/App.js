import { useState } from "react"
import List from "./components/List"
import uniqid from "uniqid"
import "./styles/App.css"
import Button from "./components/Button/Button"

function App() {
  const [newTask, setNewTask] = useState({})
  const [printedTasks, setPrintedTasks] = useState([])
  const [formValue, setFormValue] = useState("")

  function handleOnChange(value) {
    setNewTask({ title: value, id: uniqid(), isDone: false })
    setFormValue(value)
  }

  function handleOnSubmit(event) {
    event.preventDefault()

    const newTaskExists =
      newTask.hasOwnProperty("title") && newTask.title !== ""

    if (newTaskExists) {
      setPrintedTasks([...printedTasks, newTask])
    }
    setFormValue("")
    setNewTask({})
  }

  return (
    <>
      <div className="App">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            onChange={(e) => handleOnChange(e.target.value)}
            value={formValue}
          ></input>
          <Button
            type="submit"
            label={"Añadir"}
            onClick={() => {
              return
            }}
            className={"submit"}
          ></Button>
        </form>
        {printedTasks.length > 0 && (
          <List printedTasks={printedTasks} setPrintedTasks={setPrintedTasks} />
        )}
      </div>
    </>
  )
}

export default App
