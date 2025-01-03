import CountryItem from "./CountryItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your city"></Message>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country }];
    else return arr;
  }, []);
  console.log("==============", countries);
  return (
    <ul className={styles.countriesList}>
      {countries.map((country, index) => {
        return <CountryItem country={country} key={index}></CountryItem>;
      })}
    </ul>
  );
}

export default CountryList;
