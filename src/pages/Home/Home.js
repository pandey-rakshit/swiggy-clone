import Cards from "../../Components/Cards/Cards";
import data from "./data.json";

const Home = () => {
  return (
    <>
      <div className="card-container">
        {data.map((restaurants) => {
          return <Cards key={restaurants.data.id} data={restaurants} />;
        })}
      </div>
    </>
  );
};

export default Home;
