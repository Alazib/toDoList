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

    // Con mayusculas es si es algo que no muta nunca. En este caso, dependiendo del titulo o no si que cambia
    const existNewTask = newTask.hasOwnProperty("title") && newTask.title !== ""

    if (existNewTask) {
      setPrintedTasks([...printedTasks, newTask])
    }

    cleanForm()
  }

  function cleanForm () {
    setFormValue("")
    setNewTask({})
  }

  // Lo de antes, si muta en algún momento no se pone en mayusculas.
  // En este caso tampoco haria falta darle mas legibilidad. Es tipico el "Solo pinto si tengo algo en el array"
  //const SOME_PRINTED_TASK_EXISTS = printedTasks.length > 0

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
            onClick={null}
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
