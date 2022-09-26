function List({ task }) {
  return (
    <>
      <div>
        {task.map((task, position) => {
          return <li key={position}>{task}</li>
        })}
      </div>
    </>
  )
}

export default List
