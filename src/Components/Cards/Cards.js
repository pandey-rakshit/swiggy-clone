import Ratings from "./Ratings";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="img-container">
          <img
            src={
              props.image
                ? props.image
                : "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1"
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
          <span>{props.delay ? props.delay : "40 MINS"}</span>
          <span>&#x2022;</span>
          <span>{props.price ? props.price : "₹250 FOR TWO"}</span>
        </div>
        <div className="card-footer">
          <div className="divider"></div>
          {props.isOffer
            ? () => {
                return (
                  <>
                    <p>{props.isOffer}</p>
                    <div className="divider"></div>
                  </>
                );
              }
            : null}
          <div className="card-link-item">
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
