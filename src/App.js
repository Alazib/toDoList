import { useState } from "react"
import List from "./components/List"
import "./App.css"

function App() {
  const [newTask, setNewTask] = useState("")
  const [printedTask, setPrintedTask] = useState([""])

  function handleOnChange(e) {
    setNewTask(e.target.value)
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    setPrintedTask([newTask, ...printedTask])
  }

  return (
    <>
      <div className="App">
        <form onSubmit={handleOnSubmit}>
          <input type="text" onChange={(e) => handleOnChange(e)}></input>
          <button type="submit">ADD TASK</button>
        </form>
      </div>
      <List task={printedTask} />
    </>
  )
}

export default App
