const Ratings = ({ avgRating }) => {
  let className = "";
  if (!avgRating) {
    className = "default";
  } else if (avgRating > 3.8) {
    className = "success";
  } else if (avgRating > 2.9) {
    className = "secondary";
  } else {
    className = "ternary";
  }

  return (
    <div className="container small">
      <p className={className}>
        <i className="fa-solid fa-star fa-small"></i>
        <span>{avgRating}</span>
      </p>
    </div>
  );
};

export default Ratings;
