import { useEffect, useState } from "react";
import ListOfCountry from "./ListOfCountry";
import './index.css';

export default function ShowCountry() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res[0]);
        setCountries(res);
      });
  }, []);

  return (
    <ul className="countries-list">
      {countries.map((country, idx) => (
        <li key={idx}><ListOfCountry country={country} /></li>
      ))}
    </ul>
  );
}
