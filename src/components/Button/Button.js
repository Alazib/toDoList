import "./Button.css"
import checkBox from "../../images/checkbox.png"
import checkBoxDone from "../../images/checkboxdone.png"

function Button({ label, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
      {className === "pending" && (
        <img className="check-box" src={checkBox} alt="check-box"></img>
      )}
      {className === "done" && (
        <img
          className="check-box-done"
          src={checkBoxDone}
          alt="check-box-done"
        ></img>
      )}
    </button>
  )
}

export default Button
