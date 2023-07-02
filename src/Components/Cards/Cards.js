import Ratings from "./Ratings";
import Promoted from "./Promoted";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="img-container">
          {props.isPromoted ? (
            <>
              <div className="promotion-container">
                <Promoted />
              </div>
            </>
          ) : null}
          <img
            src={
              props.image
                ? props.image
                : "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
            }
          />
        </div>
        <div className="text-container">
          <h3>{props.title ? props.title : "Strawberries"}</h3>
          <p>{props.restaurant ? props.restaurant : "Desserts"}</p>
        </div>
        <div className="tag-container">
          <Ratings text={props.ratings ? props.ratings : null} />{" "}
          <span>&#x2022;</span>
          <span>{props.delay ? props.delay + "MINS" : "40 MINS"}</span>
          <span>&#x2022;</span>
          <span>{props.price ? "₹" + props.price : "₹250 FOR TWO"}</span>
        </div>
        <div className="card-footer">
          {props.isOffer ? (
            <>
              <div className="divider"></div>
              <p>{props.isOffer}</p>
            </>
          ) : null}
          <div className="card-link-item">
            <div className="divider"></div>
            <a href="#" className="card-link">
              QUICK VIEW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
