import Cards from "../../Components/Cards/Cards";
import data from "../../utils/data.json";

const Home = () => {
  return (
    <>
      <div className="section-container">
        {data.map((restaurants) => {
          return <Cards key={restaurants?.data?.id} data={restaurants} />;
        })}
      </div>
    </>
  );
};

export default Home;
