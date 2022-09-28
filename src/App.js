import { useState } from "react"
import List from "./components/List"
import "./App.css"

function App() {
  const [newTask, setNewTask] = useState("")
  const [printedTasks, setPrintedTasks] = useState([])

  function handleOnChange(e) {
    setNewTask(e.target.value)
  }

  function handleOnSubmit(event) {
    event.preventDefault()

    const NEW_TASK_EXISTS = newTask !== ""

    if (NEW_TASK_EXISTS) {
      setPrintedTasks([...printedTasks, newTask])
    }
  }

  return (
    <>
      <div className="App">
        <form onSubmit={handleOnSubmit}>
          <input type="text" onChange={(e) => handleOnChange(e)}></input>
          <button type="submit">ADD TASK</button>
        </form>
      </div>
      <List tasksList={printedTasks} setPrintedTasks={setPrintedTasks} />
    </>
  )
}

export default App
