import React from "react";
import useSelect from "../hooks/useSelect";
import useCountry from "../hooks/useCountry";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

const Form = ({ setCategory, setCountry }) => {
  const CATEGORIES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];
  const COUNTRIES = [
    { value: "mx", label: "México" },
    { value: "us", label: "Estados Unidos" },
    { value: "ar", label: "Argentina" },
    { value: "co", label: "Colombia" },
  ];

  // Custom hooks
  const [category, SelectNews] = useSelect("general", CATEGORIES);
  const [country, SelectCountry] = useCountry("mx", COUNTRIES);

  // On Submit
  const searchNews = (e) => {
    e.preventDefault();
    setCategory(category);
    setCountry(country);
  };

  return (
    <div className={`${styles.browser} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <label>País: </label>
          <SelectCountry />

          <label>Categoría: </label>
          <SelectNews />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
};

export default Form;
