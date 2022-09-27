import "../styles/List.css"
import Button from "./Button/Button"
import Task from "./Task"

function List({ tasksList }) {
  return (
    <>
      <ul className="to-do-list">
        {tasksList.map((task, position) => {
          return <Task key={position} taskDescription={task}></Task>
        })}
      </ul>
      <Button label={"X"} className={"delete"} onClick={undefined} />
    </>
  )
}

export default List
