import React from 'react';
import '../../styles/reused/tourbtn.css'

const TourBtn = () => {
  return (
    <div className="tour__button">
      <button
        type="submit"
        className="tour__button_green buttons"
      >
        Найти тур
      </button>
      <button
        type="reset"
        className="tour__button_lettuce buttons"
      >
        Сбросить
      </button>
    </div>
  )
}

export default TourBtn



