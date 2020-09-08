import React from "react";

const Weather = ({
  city,
  country,
  temperature,
  humidity,
  description,
  error
}) => {
  return (
    <div className="weather__info">
      {city && country && (
        <p className="weather__key">
          Location:{" "}
          <span className="weather__value">
            {" "}
            {city}, {country}
          </span>
        </p>
      )}

      {temperature && (
        <p className="weather__key">
          Temperature: <span className="weather__value"> {temperature}</span>
        </p>
      )}

      {humidity && (
        <p className="weather__key">
          Humidity: <span className="weather__value"> {humidity} </span>
        </p>
      )}

      {description && (
        <p className="weather__key">
          Condition: <span className="weather__value"> {description}</span>
        </p>
      )}

      {error && <p className="weather__error">{error}</p>}
    </div>
  );
};
export default Weather;