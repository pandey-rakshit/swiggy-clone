import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={props.onClick} className={"btn " + props.className}>
        {props.text ? props.text : "Submit"}
      </button>
    </div>
  );
};

export default Buttons;
