import "../styles/List.css"

function List({ task }) {
  return (
    <>
      <ul className="to-do-list">
        {task.map((task, position) => {
          return (
            <div key={position} className="button-and-task">
              <button className="button delete">X</button>
              <li className="task">{task}</li>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default List
