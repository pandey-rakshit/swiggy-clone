import Ratings from "./Ratings";
import Promoted from "./Promoted";

const Cards = ({ data }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoString,
    deliveryTime,
    promoted,
    avgRating,
    aggregatedDiscountInfo,
  } = data?.data;

  const offerString =
    aggregatedDiscountInfo?.shortDescriptionList[0]?.meta || null;

  return (
    <div className="card">
      <div className="card-container">
        <div className="img-container">
          {promoted ? (
            <>
              <div className="promotion-container">
                <Promoted />
              </div>
            </>
          ) : null}
          <img
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
            width={254}
            height={160}
          />
        </div>
        <div className="text-container">
          <div className="heading">
            <h3>{name}</h3>
          </div>
          <div className="cuisine">
            <p>{cuisines.join(", ")}</p>
          </div>
        </div>
        <div className="tag-container">
          <Ratings avgRating={avgRating} /> <span>&#x2022;</span>
          <span>{deliveryTime + " Min"}</span>
          <span>&#x2022;</span>
          <span>{costForTwoString}</span>
        </div>
        <div className="card-footer">
          {offerString ? (
            <>
              <div className="divider"></div>
              <p>
                <i className="fa-solid fa-cookie"></i>
                {offerString}
              </p>
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
