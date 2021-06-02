import React from 'react';
import './tripCard.css';
import { useState } from 'react';

function TripCard({ imgUrl, country, city, info }) {
  const showInfo = {
    display: 'none',
  };
  const hideInfo = {
    display: 'block',
  };

  const [infoToggle, setInfoToggle] = useState(false);

  function infoClick() {
    if (!infoToggle) {
      setInfoToggle(true);
    } else {
      setInfoToggle(false);
    }
  }

  return (
    <>
      <div className='card'>
        <img src={imgUrl} />
        <h1>{country}</h1>
        <h3>{city}</h3>
        <span onClick={infoClick}>
          info<i className='fas fa-arrow-circle-down'></i>
        </span>
        <p style={infoToggle ? hideInfo : showInfo}>{info}</p>
      </div>
    </>
  );
}

export default TripCard;
