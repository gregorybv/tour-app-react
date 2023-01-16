import React from 'react';
import '../../styles/reused/choicebtn.css'
import arrow from "../../assetts/image/block_2/icon/arrow.png";

const ChoiceBtn = () => {
  return (
    <button type="button" className="choice__button button">
      Подробнее
      <img
        className="choice__img"
        src={arrow}
        alt="Arrow"
      />
    </button>
  )
}

export default ChoiceBtn



