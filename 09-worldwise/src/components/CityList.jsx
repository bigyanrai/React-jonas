import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your city"></Message>;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id}></CityItem>;
      })}
    </ul>
  );
}

export default CityList;
