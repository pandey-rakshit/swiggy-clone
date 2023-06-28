import "./Cards.css";

const Ratings = (props) => {
  const { text } = props;
  let className = "";
  if (!text) {
    className = "default";
  } else if (text > 3.8) {
    className = "success";
  } else if (text > 2.9) {
    className = "secondary";
  } else {
    className = "ternary";
  }

  return (
    <div className="container small">
      <p className={className}>
        <i className="fa-solid fa-star fa-small"></i>
        <span>{props.text ? props.text : "--"}</span>
      </p>
    </div>
  );
};

export default Ratings;
