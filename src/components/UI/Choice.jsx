import React from 'react';
import '../../styles/choice.css'
import card_1 from '../../assetts/image/block_2/card tour photo-1.png'
import card_2 from '../../assetts/image/block_2/card tour photo-2.png'
import card_3 from '../../assetts/image/block_2/card tour photo-3.png'
import card_4 from '../../assetts/image/block_2/card tour photo-4.png'
import card_5 from '../../assetts/image/block_2/card tour photo-5.png'
import card_6 from '../../assetts/image/block_2/card tour photo-6.png'
import ChoiceOptions from "../Reused/ChoiceOptions";
import ChoiceBtn from "../Reused/ChoiceBtn";

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

const Choice = () => {
  return (
    <section id="tour" className="choice container">
      <div className="choice__body">
        <h2 className="title-h2">Выбери свой тур</h2>
        <div className="choice__menu">
          <ul className="choice__list">
            <li>
              <button
                type="button"
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
      </div>
      <ul className="choice__photo">
        <li className="choice__item">
          <ChoiceOptions/>
          <ChoiceBtn/>
          <img
            className="choice__image"
            src={card_1}
            alt="Painting"
          />
        </li>
        <li className="choice__item">
          <ChoiceOptions/>
          <ChoiceBtn/>
          <img
            className="choice__image"
            src={card_2}
            alt="Painting"
          />
        </li>
        <li className="choice__item">
          <ChoiceOptions/>
          <ChoiceBtn/>
          <img
            className="choice__image"
            src={card_3}
            alt="Painting"
          />
        </li>
        <li className="choice__item">
          <ChoiceOptions/>
          <ChoiceBtn/>
          <img
            className="choice__image"
            src={card_4}
            alt="Painting"
          />
        </li>
        <li className="choice__item">
          <ChoiceOptions/>
          <ChoiceBtn/>
          <img
            className="choice__image"
            src={card_5}
            alt="Painting"
          />
        </li>
        <li className="choice__item">
          <ChoiceOptions/>
          <ChoiceBtn/>
          <img
            className="choice__image"
            src={card_6}
            alt="Painting"
          />
        </li>
      </ul>
    </section>
  )
}

export default Choice



