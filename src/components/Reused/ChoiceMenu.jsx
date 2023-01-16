import React from 'react';
import '../../styles/reused/choicemenu.css'

const allNavButtons = document.querySelectorAll(".choice__link");
allNavButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    allNavButtons.forEach((button) => {
      button.classList.remove("choice__link_active");
    });
    const {target} = event;
    target.classList.add("choice__link_active");
  });
});

const ChoiceMenu = () => {
  return (
    <div className="choice__menu">
      <ul className="choice__list">
        <li>
          <button
            type="submit"
            className="choice__link choice__link_active"
          >
            Популярные
          </button>
        </li>
        <li>
          <button type="button" className="choice__link">
            Авторские
          </button>
        </li>
        <li>
          <button type="button" className="choice__link">
            Походы
          </button>
        </li>
        <li>
          <button type="button" className="choice__link">
            Сплавы
          </button>
        </li>
        <li>
          <button type="button" className="choice__link">
            Велопрогулки
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ChoiceMenu



