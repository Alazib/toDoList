import "../styles/List.css"
import Button from "./Button/Button"
import Task from "./Task"

function List({ printedTasks, setPrintedTasks }) {
  function deleteTasksDone() {
    const tasksUndone = printedTasks.filter((task) => {
      return !task.isDone
    })
    setPrintedTasks(tasksUndone)
  }

  return (
    <div className="to-do-list-and-button">
      <ul className="to-do-list">
        {printedTasks.map((task) => {
          const { id } = task
          return (
            <Task
              key={id}
              taskPrinted={task}
              printedTasks={printedTasks}
              setPrintedTasks={setPrintedTasks}
            />
          )
        })}
      </ul>
      <Button
        label={"Eliminar completados"}
        className={"delete"}
        onClick={() => {
          deleteTasksDone()
        }}
      />
    </div>
  )
}

export default List
