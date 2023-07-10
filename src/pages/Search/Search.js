import data from "../../utils/search.json";
import { SEARCH_PAGE_CLOUDINARY_CDN } from "../../utils/constants";

const Search = () => {
  return (
    <div className="section-container">
      <div className="section-search-container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search for restaurants and food"
          ></input>
          <i class="fa fa-search"></i>
        </div>
        <div className="cuisines">
          <h4>Popular Cuisines</h4>
          <div className="search-image-container">
            {data.map((cuisine) => {
              return (
                <div className="img-container">
                  <img
                    src={`${SEARCH_PAGE_CLOUDINARY_CDN}/${cuisine.imageId}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
